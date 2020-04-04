<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectAssignedUser extends Model
{
    protected $table = "project_assigneduser";

    protected $guarded = [];
    

    public function assignedUser()
    {
        return $this->belongsToMany(User::class, 'user_id');
    }

    public function assignedProject()
    {
        return $this->belongsToMany(Project::class, 'project_id');
    }

    public function unassignUser()
    {
        return $this->belongsToMany(Project::class, 'project_id');
    }

    
}
