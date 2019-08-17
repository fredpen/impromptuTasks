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

    /**
     * Subtasks
     *
     * @return an instance of subtasks associated
     * with the task
     */
    public function subTasks()
    {
        return $this->hasMany(SubTask::class, 'task_id');
    }

    /**
     * Project
     *
     * @return an instance of project
    //  */
    // public function projects()
    // {
    //     return $this->HasOne(Project::class);
    // }
}
