<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectAssignedUser extends Model
{
    protected $table = "project_assigneduser";

    protected $with = ['assignedUser'];

    protected $guarded = [];
    

    public function assignedUser()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function assignedProject()
    {
        return $this->belongsToMany(Project::class, 'project_id');
    }

}
