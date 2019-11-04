<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var    array
     * @return array [<description>]
     */
    public function role()
    {
        return $this->belongsTo('App\Role');
    }


    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function region()
    {
        return $this->belongsTo(Region::class);
    }


    public function city()
    {
        return $this->belongsTo(City::class);
    }

   

    public function skills()
    {
        return $this->belongsToMany(SubTask::class, 'user_sub_task');
    }

   

    public function fetchskillsId()
    {
        $skillsObject = $this->skills;
        $skillsArray = json_decode(json_encode($skillsObject), true) ;
        return array_column($skillsArray, 'id');
    }

    public function isTaskMaster()
    {
        if ($this->role_id == 2) return true;
        return false;
    }

    public function isTaskGiver()
    {
        if ($this->role_id == 1) return true;
        return false;
    }

    public function isAdmin()
    {
        if ($this->role_id === 0) return true;
        return false;
    }

    public function isActive()
    {
        if ($this->isActive === 1) return true;
        return false;
    }

    public function status()
    {
        return $this->isActive;
    }

    public function hasApplied($project_id)
    {
        $hasApplied = ProjectUser::where(['project_id' => $project_id, 'user_id' => $this->id])->first();
        return $hasApplied ? 1 : 0;
    }

    public function appliedProjects() //applied projects
    {
        return $this->belongsToMany(Project::class, 'project_apllieduser');
    }

    public function assignedProjects() //assigned projects
    {
        return $this->belongsToMany(Project::class, 'project_assigneduser')->withPivot('status');
    }

    public function projects() //created projects
    {
        return $this->hasMany(Project::class);
    }
}
