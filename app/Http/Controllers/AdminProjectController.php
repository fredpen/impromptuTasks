<?php

namespace App\Http\Controllers;

// use App\Notifications\ProjectAssignment;

use App\Notifications\ProjectAssignment;
use App\Project;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Request;

class AdminProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'isAdmin']);
    }

    public function all()
    {
        $projects = Project::latest()->paginate(10);
        return view('admin.projects.all', compact('projects'));
    }

    public function completed()
    {
        $projects = Project::where('status', 'completed')->paginate(20);
        return view('admin.projects.completed', compact('projects'));
    }

    public function cancelled()
    {
        $projects = Project::where('status', 'cancelled')->paginate(20);
        return view('admin.projects.cancelled', compact('projects'));
    }

    public function posted()
    {
        $projects = Project::where('status', 'posted')->paginate(20);
        return view('admin.projects.posted', compact('projects'));
    }

    public function created()
    {
        $projects = Project::where('status', 'created')->paginate(20);
        return view('admin.projects.created', compact('projects'));
    }

    public function ongoing()
    {
        $projects = Project::where('status', 'ongoing')->paginate(20);
        return view('admin.projects.ongoing', compact('projects'));
    }

    public function adminShow($id)
    {
        $project = Project::where('id', $id)->with('taskMasters')->first();
        return view('admin.projects.show', compact('project'));
    }

    // public function adminDetailView($id)
    // {
    //     $project = Project::where('id', $id)->with('taskMasters')->first();
    //     return view('admin.projects.show', compact('project'));
    // }

    public function assign(Request $request)
    {
        DB::table('project_assigneduser')->insert([
            'project_id' => $request->project_id,
            'user_id' => $request->user_id,
            'updated_at' => Carbon::now()
        ]);

        $user = User::findOrFail($request->user_id);
        $user->notify(new ProjectAssignment($request->project_id));
        return back();
    }

    public function reassign(Request $request)
    {
        DB::table('project_assigneduser')->where([
            'project_id' => $request->project_id,
            'user_id' => $request->user_id,
        ])->delete();
        return back();
    }

    public function accept($project_id) //the logic is a user has to be authorise to do this and cllecting the user to get this route
    {
        $tasksassigned = DB::table('project_assigneduser')->where(['user_id' => Auth::id(), 'project_id' => $project_id])->get();
        if (!count($tasksassigned)) abort('404');
        // return $project_id;
    }
}
