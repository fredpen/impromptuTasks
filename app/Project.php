<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Notifications\projectCreated;
use Illuminate\Support\Facades\Auth;
use App\Notifications\projectCompleted;
use App\Notifications\ProjectCancelled;
use App\Notifications\ProjectPosted;

class Project extends Model
{
    protected $guarded = [];
    protected $with = ['task:id,name', 'subtask:id,name', 'owner:id,name', 'country:id,name', 'region:id,name', 'city:id,name', 'photos:url,project_id'];


    public function task()
    {
        return $this->belongsTo(Tasks::class, 'task_id');
    }


    public function subtask()
    {
        return $this->belongsTo(SubTask::class, 'sub_task_id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function photos()
    {
        return $this->hasMany(Projectphoto::class);
    }

    public function taskMasters()
    {
        return $this->belongsToMany(User::class);
    }


    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }


    public function notifyOwner($action)
    {
        if ($action == 'created') return Auth::user()->notify(new projectCreated);
        if ($action == 'posted') return $this->owner->notify(new projectPosted);
        if ($action == 'deleted') return $this->owner->notify(new ProjectCancelled);
        if ($action == 'completed') return $this->owner->notify(new projectCompleted);
        if ($action == 'applied') {
            return $this->owner->notify(new projectCompleted);
        }
    }

    public function updateStatus($action)
    {
        $dateTime = date("Y-m-d");
        if ($action == 'created') return $this->update(['status' => $action]);
        if ($action == 'posted') return $this->update(['status' => $action, 'posted_on' => $dateTime]);
        if ($action == 'deleted') return $this->update(['status' => $action]);
        if ($action == 'completed') return $this->update(['status' => $action, 'completed_on' => $dateTime]);
    }

    public function hasApplied($id)
    {
        if (ProjectUser::where(['project_id' => $id, 'user_id' => Auth::id()])->first()) return "1";
        return "0";
    }
}


