<?php

namespace App\Http\Controllers;

use App\SubTask;
use App\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Country;
use App\Region;
use App\City;
use App\Notifications\ProjectCancelled;
use App\Notifications\projectCreated;
use App\Notifications\ProjectPosted;
use App\Project;


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

    protected $expertise = [
        'Beginner' => 'Average',
        'Experienced' => 'Experienced',
        'Expert' => 'Expert',
        'veteran' => 'Veteran'
    ];

    protected $metaData = [
        array('metaname' => 'color', 'metavalue' => 'blue'),
        array('metaname' => 'size', 'metavalue' => 'big')
    ];


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'isActive'])->except(['show', 'index']);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::where('status', 'posted')->get();
        return view('projects.index', compact('projects'));
    }
    

    public function create() 
    {
        if (Auth::user()->isTaskMaster()) return redirect()->action(
            'AccountController@myTasks')->with('message', 'Task Masters can not post Tasks. To post tasks, create a Task Giver account'
        );

        $projects = Project::where([['user_id', '=', Auth::id()], ['status', '!=', 'deleted']])->get();

        return view('projects.create', [
            'draftProjects' => $this->draftProjects($projects),
            'notDraftProjects' => $this->notDraftProjects($projects),
            'tasks' => Tasks::pluck('name', 'id')
        ]);
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
            ['model' => 'required', 'task_id' => 'required', 'user_id' => 'required']
        );
        $project = Project::create($validatedData);
        $project->owner->notify((new projectCreated)->delay(10));
        return redirect()->action('ProjectController@edit', ['id' => $project->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return view("projects.show", compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return view('projects.edit', [
            'project' => $project,
            'metaData' => $this->metaData,
            'expertise' => $this->expertise,
            'duration' => $this->durationArray,
            'countries' => $project->model == 'remote' ? '' : Country::all(['name', 'id']),
            'tasks' => Tasks::with('subTasks')->get(['id', 'name'])
            // 'cities' => ($project->region) ? City::where('region_id', $project->region_id)->get(['id', 'name']) : 0,
            // 'regions' => ($project->country) ? Region::where('country_id', $project->country_id)->get(['id', 'name']) : 0
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Project $project)
    {
        $this->authorize('edit', $project);
        $project->posted();
        $project->owner->notify((new ProjectPosted)->delay(10)->onQueue('notifs'));
        return redirect()->action('ProjectController@create')->with('message', 'Task has been posted successfully. We will contact you shortly');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $this->authorize('edit', $project);
        $project->cancelled();
        $project->owner->notify((new ProjectCancelled)->delay(10));
        return redirect()->action('ProjectController@create');
    }


    public function ajax(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $this->authorize('edit', $project);
        $project->update([$request->field => $request->value]);
        if ($request->field == 'task_id') return SubTask::where(['task_id' => $request->value])->get(['id', 'name']);
        if ($request->field == 'country_id') return Region::where(['country_id' => $request->value])->get(['id', 'name']);
        if ($request->field == 'region_id') return City::where(['region_id' => $request->value])->get(['id', 'name']);
    }

    private function draftProjects($array)
    {
        return $array->filter(function($items) {
            return $items->status == 'Draft';
        });
    }

    private function notDraftProjects($array)
    {
        return $array->filter(function($items) {
            return $items->status != 'Draft';
        });
    }


}
