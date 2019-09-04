<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Project extends Model
{
    protected $guarded = [];
    protected $with = ['task', 'subtask'];


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

    public function updateStatus($status)
    {
        if ($status == "post") return $this->post();
        if ($status == "cancelled") return $this->cancelled();
        if ($status == "completed") return $this->completed();
    }

    private function post()
    {
        if ($this->status == "posted") return false;
        $date = date('Y-m-d H:i:s', time());
        return $this->update(['posted_on' => $date, 'status' => 'posted']);
    }

    private function cancelled()
    {
        if ($this->status == "cancelled") return false;
        $date = date('Y-m-d H:i:s', time());
        return $this->update(['posted_on' => $date, 'status' => 'cancelled']);
    }

    private function completed()
    {
        if ($this->status == "completed") return false;
        $date = date('Y-m-d H:i:s', time());
        return $this->update(['posted_on' => $date, 'status' => 'completed']);
    }

}


