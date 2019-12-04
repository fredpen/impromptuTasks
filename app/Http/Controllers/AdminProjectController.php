<?php

namespace App\Http\Controllers;

use App\Notifications\ProjectAssignment;
use App\Project;
use App\ProjectAssignedUser;
use App\User;
use Symfony\Component\HttpFoundation\Request;

class AdminProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'isAdmin']);
    }

    private function validator($request)
    {
        return $request->validate([
            'project_id' => 'required|numeric',
            'user_id' => 'required|numeric'
        ]);
    }

    
    public function showallProjects()
    {
        return view('admin.projects.all', ['projects' => Project::latest()->paginate(20)]);
    }

    public function showcompletedProjects()
    {
        $projects = Project::where('status', 'completed')->paginate(20);
        return view('admin.projects.completed', compact('projects'));
    }

    public function showcancelledProjects()
    {
        $projects = Project::where('status', 'deleted')->paginate(20);
        return view('admin.projects.cancelled', compact('projects'));
    }

    public function showpostedProjects()
    {
        $projects = Project::where('status', 'posted')->paginate(20);
        return view('admin.projects.posted', compact('projects'));
    }

    public function showcreatedProjects()
    {
        $projects = Project::where('status', 'created')->paginate(20);
        return view('admin.projects.created', compact('projects'));
    }

    public function showongoingProjects()
    {
        $projects = Project::where('status', 'live')->paginate(20);
        return view('admin.projects.ongoing', compact('projects'));
    }

    public function adminShow(Project $project)
    {
        return view('admin.projects.show', compact('project'));
    }


    public function assign(Request $request)
    {
        $projectassignedUser = ProjectAssignedUser::firstOrCreate($this->validator($request));
        $user = User::findOrFail($request->user_id);
        $user->notify(new ProjectAssignment($projectassignedUser->id));
        return back();
    }

    public function reassign(Request $request)
    {
        ProjectAssignedUser::where(['user_id' => $request->user_id, 'project_id' => $request->project_id])->delete();
        return back();
    }

    
}
