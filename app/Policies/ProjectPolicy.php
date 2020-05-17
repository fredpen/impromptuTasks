<?php

namespace App\Policies;

use App\User;
use App\Project;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
{
    use HandlesAuthorization;

    public function edit(User $user, Project $project)
    {
        return $user->id === $project->user_id && (!$project->isAssigned());
    }

    public function before($user)
    {
        if ($user->isAdmin()) return true;
    }

}
