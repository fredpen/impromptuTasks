<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectAssignedUser extends Model
{
    protected $table = "project_assigneduser";

    protected $guarded = [];
    

    public function assignedUser()
    {
        return $this->belongsToMany(App::User, 'user_id');
    }

    public function assignedProject()
    {
        return $this->belongsToMany(App::Project, 'project_id');
    }

    public function unassignUser()
    {
        return $this->belongsToMany(App::Project, 'project_id');
    }

    
}
