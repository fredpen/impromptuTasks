<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{

    protected $with = ['subTasks'];
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

    public function storeTasks($taskString)
    {
        if (strpos($taskString, ",") === false) return $this::create(['name' => $taskString]);
        $taskArray = explode(",", $taskString);
        foreach ($taskArray as  $taskName) {
            $this::firstOrcreate(['name' => $taskName]);
        }
        return true;
    }
}
