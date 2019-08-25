<?php

namespace App\Http\Controllers;

use App\Location;
use App\Project;
use App\SubTask;
use App\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Country;
use App\Region;

class ProjectController extends Controller
{
    protected $durationArray =  [
        'Few Hours' => 'Few Hours',
        'A day' => 'A day',
        'less than a week' => 'less than a week',
        'less than a month' => 'less than a month',
        'less than three months' => 'less than three months',
        'more than three months' => 'more than three months',
        'not sure' => 'not sure'
    ];


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'isActive']);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Project::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $projects = Project::where('user_id', Auth::id())->get();
        $tasks = Tasks::pluck('name', 'id');
        return view('projects.create', compact('projects', 'tasks'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate(
            ['model' => 'required', 'task_id' => 'required']
        );
        $validatedData['user_id'] = Auth::id();
        $project = Project::create($validatedData);
        return redirect()->action('ProjectController@edit', ['id' => $project->id]);;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        $duration = $this->durationArray;
        $tasks = Tasks::with('subTasks')->get(['name', 'id']);
        if ($project->model == "onsite") {
            $countries = Country::with('regions')->get(['name', 'id']);
            return view('projects.edit', compact('project', 'tasks', 'countries', 'duration'));
        }
        return view('projects.edit', compact('project', 'tasks', 'duration'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $project->update([$request->field => $request->value]);
        if ($request->field == 'task_id') return SubTask::where(['task_id' => $request->value])->get(['id', 'name']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
