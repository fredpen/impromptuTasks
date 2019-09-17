<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Notifications\projectCreated;
use Illuminate\Support\Facades\Auth;
use App\Notifications\projectCompleted;
use App\Notifications\ProjectCancelled;

class Project extends Model
{
    protected $guarded = [];
    protected $with = ['task:id,name'];


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
        $this->updateStatus($action);
        if ($action == 'created') return Auth::user()->notify(new projectCreated);
        if ($action == 'posted') return $this->owner->notify(new projectPosted);
        if ($action == 'deleted') return $this->owner->notify(new ProjectCancelled);
        if ($action == 'completed') return $this->owner->notify(new projectCompleted);
    }

    private function updateStatus($action)
    {
        $this->update(['status' => $action]);
    }

}


