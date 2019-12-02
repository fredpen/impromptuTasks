<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class Project extends Model
{
    protected $guarded = [];
    protected $with = ['task:id,name', 'subtask:id,name', 'owner:id,name', 'country:id,name', 'region:id,name', 'city:id,name', 'photos:url,project_id'];

    public function timeNow()
    {
        return Carbon::now();
    }

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
        return $this->belongsToMany(User::class, 'project_apllieduser')->withPivot('resume');
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

    public function isAssigned()
    {
        return DB::table('project_assigneduser')->where('project_id', $this->id)->get('id');
    }

    public function hasBeenAssigned($user_id)
    {
        $project = DB::table('project_assigneduser')->where([
            'project_id' => $this->id,
            'user_id' => $user_id
        ])->get();
        return count($project) > 0;
    }

    public function completed()
    {
        return $this->update(['status' => 'completed']);
    }

    public function cancelled()
    {
        if ($this->status == 'Draft')  return $this->delete();
        return $this->update(['status' => 'deleted', 'cancelled_on' => $this->timeNow()]);
    }

    public function live()
    {
        return $this->update(['status' => 'live']);
    }

    public function markCreate()
    {
        return $this->update(['status' => 'Draft']);
    }

    public function posted()
    {
        return $this->update(['status' => 'posted', 'posted_on' => $this->timeNow()]);
    }

    public function color()
    {
        if ($this->status == 'Draft') return "primary";
        if ($this->status == 'posted') return "secondary";
        if ($this->status == 'completed') return "success";
        if ($this->status == 'live') return "secondary";
    }

}


