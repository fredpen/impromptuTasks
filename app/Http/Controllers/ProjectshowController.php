<?php

namespace App\Http\Controllers;

use App\Notifications\ProjectAppllication;
use Illuminate\Support\Facades\Auth;
use App\Project;
use App\ProjectAssignedUser;
use App\Tasks;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectshowController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['apply', 'accept']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   

    private $applyMessage = 'Your application has been sent, we will contact you through your mail and message box when the task owner maskes a decison.';
    private $acceptMessage = "Thanks for accepting the Task, one of our agents will contact you shortly, You can track the progress of all your Task in your here";

    public function apply(Project $project, Request $request)
    {
        DB::table('project_apllieduser')->insert([
            'user_id' => Auth::id(), 
            'project_id' => $request->project_id, 
            'resume' => $request->resume,
            'updated_at' => Carbon::now()
        ]);
        $project->owner->notify(new ProjectAppllication);
        return back()->with("message", $this->applyMessage);
    }


    public function accept(ProjectAssignedUser $projectAssignedUser) 
    {
        $projectAssignedUser->update(['status' => 'accepted']);
        return redirect()->action('AccountController@show', $projectAssignedUser->user_id)->with("message", $this->acceptMessage);
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
