<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Project extends Model
{
    protected $guarded = [];
    protected $with = ['task', 'subtask'];

    /**
     * All related tasks with the project
     *
     * @return an instance of the task object
     */
    public function task()
    {
        return $this->belongsTo(Tasks::class, 'task_id');
    }

    /**
     * All related subtasks with the project
     *
     * @return an instance of the subtasks object
     */
    public function subtask()
    {
        return $this->belongsTo(SubTask::class, 'sub_task_id');
    }
}
