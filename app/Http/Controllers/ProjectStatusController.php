<?php

namespace App\Http\Controllers;

use App\Project;

class ProjectStatusController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function completed(Project $project)
    {
        $project->completed();
        return back()->with('message', 'Project status has been updated');
    }

    public function cancelled(Project $project)
    {
        $project->cancelled();
        return back()->with('message', 'Project status has been updated');
    }

    public function live(Project $project)
    {
        $project->live();
        return back()->with('message', 'Project status has been updated');
    }

    public function posted(Project $project)
    {
        $project->posted();
        return back()->with('message', 'Project status has been updated');
    }
}
