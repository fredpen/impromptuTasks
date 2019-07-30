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


    public function location()
    {
        return $this->belongsTo(Location::class);
    }


    /**
     * The attributes that should be cast to native types.
     *
     * @var    array
     * @return array [<instance of subtasks>]
     */
    public function skills()
    {
        return $this->belongsToMany(SubTask::class, 'user_sub_task');
    }
}
