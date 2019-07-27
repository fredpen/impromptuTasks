<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{

    protected $guarded = [];

    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }

    public function subTasks()
    {
        return $this->hasMany(SubTask::class, 'task_id');
    }
}
