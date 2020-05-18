<?php

namespace App\Http\Controllers;


use App\Helpers\ResponseHelper;
use App\Http\Controllers\Controller;
use App\ProjectAssignedUser;

class ProjectAssignmentController extends Controller
{
    protected $projectAssignedUser;

    public function __construct(ProjectAssignedUser $projectAssignedUser)
    {
        $this->projectAssignedUser = $projectAssignedUser;
    }

    public function projectAssignedUser($projectId)
    {
        $projectassignedUser = $this->projectAssignedUser->where('project_id', $projectId)->get();
        return $projectassignedUser ? ResponseHelper::sendSuccess($projectassignedUser) : ResponseHelper::serverError();
    }
}
