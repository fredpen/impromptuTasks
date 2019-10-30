<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Project;
use App\Tasks;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectshowController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only('apply');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    private $message = 'Your application has been sent, we will contact you through your mail and message box when the task owner maskes a decison.';

    public function apply(Project $project, Request $request)
    {
        DB::table('project_apllieduser')->insert([
            'user_id' => Auth::id(), 
            'project_id' => $request->project_id, 
            'resume' => $request->resume,
            'updated_at' => Carbon::now()
        ]);
        $project->notifyOwner('applied');
        return back()->with("message", $this->message);
    }



    public function show(Tasks $task)
    {
        $taskName = $task->name;
        if (Auth::user() && Auth::user()->isTaskGiver()) { //show task masters if its a task giver
                // $taskMaster = User::where()->get();
                // return "list if freelancers";
        }

        $projects = Project::where([ //show task that are posted
            ['task_id', '=', $task->id],
            ['status', '=', 'posted']
        ])->get();
        return view('projects.index', compact('projects', 'taskName'));
    }
}
