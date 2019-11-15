<?php

namespace App\Http\Controllers;

use App\Notifications\ProjectAppllication;
use Illuminate\Support\Facades\Auth;
use App\Project;
use App\ProjectAppliedUser;
use App\ProjectAssignedUser;
use App\Tasks;
use Illuminate\Http\Request;

class ProjectshowController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'isActive'])->only(['apply', 'accept']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   

    private $applyMessage = 'Your application has been sent, we will contact you through your 
                            mail and message box when the task owner maskes a decison.';
    private $acceptMessage = "Thanks for accepting the Task, one of our agents will contact you shortly, 
                            You can track the progress of all your Task in your here";

    private function _validate($request)
    {
        return $request->validate([
            'user_id' => 'required|numeric',
            'project_id' => 'required|numeric',
            'resume' => 'required'
        ]);
    }


    public function apply(Request $request)
    {
        ProjectAppliedUser::firstOrCreate($this->_validate($request));
        Auth::user()->notify(new ProjectAppllication);
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
            $task = Tasks::where('id', $task->id)->with('masters')->get();
            return view('taskMaster.index', compact('task', 'taskName'));
        }

        $projects = Project::where([ //show task that are posted
            ['task_id', '=', $task->id],
            ['status', '=', 'posted']
        ])->get();
        return view('projects.index', compact('projects', 'taskName'));
    }
}
