<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectAppliedUser extends Model
{
    protected $guarded = [];
    protected $table = 'project_apllieduser';
    protected $with = 'applications';

    public function applications()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
