<?php

namespace App\Http\Controllers;

use App\Tasks;
use Illuminate\Support\Facades\Auth;
use App\Project;
use App\User;

class ProjectshowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }



     public function show($id)
    {
        if (Auth::user()) {
            if (Auth::user()->isTaskGiver()) {
                $taskMaster = User::where()->get();
                return "list if freelancers";
            }
        }

        $projects = Project::where(['task_id' => $id])->get();
        return view('projects.index', compact('projects'));
    }
}
