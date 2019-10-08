<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Project;
use App\User;
use App\ProjectUser;

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

    public function apply($id)
    {
        Auth::user()->appliedProjects()->attach($id);
        return back()->with("message", $this->message);
    }

    public function show($id)
    {
        if (Auth::user()) { //show task masters if its a task giver
            if (Auth::user()->isTaskGiver()) {
                $taskMaster = User::where()->get();
                return "list if freelancers";
            }
        }

        $projects = Project::where([ //show task that are posted
            ['task_id', '=', $id],
            ['status', '=', 'posted']
        ])->get();
        return view('projects.index', compact('projects'));
    }
}
