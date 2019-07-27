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

    /**
     * The attributes that should be cast to native types.
     *
     * @var    array
     * @return array [<instance of subtasks>]
     */
    public function subtasks()
    {
        return $this->belongsToMany(User::class, 'user_subtask');
    }
}
