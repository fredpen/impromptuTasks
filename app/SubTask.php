<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubTask extends Model
{
    protected $guarded = [];

    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }

    public function subtasks()
    {
        return $this->belongsToMany(User::class, 'user_subtask');
    }

    public function storeSubtasks($subTaskString, $taskId)
    {
        if (strpos($subTaskString, ",") === false) return $this::create(['task_id' => $taskId, 'name' => $subTaskString]);
        $subTaskArray = explode(",", $subTaskString);
        foreach ($subTaskArray as  $subTask) {
            $this::firstOrcreate(['task_id' => $taskId, 'name' => $subTask]);
        }
    }
}
