<?php

namespace App\Http\Controllers;

use App\Location;
use App\Project;
use App\SubTask;
use App\Tasks;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    protected $durationArray =  [
        'A day' => 'A day',
        'less than a week' => 'less than a week',
        'less than a month' => 'less than a month',
        'less than three months' => 'less than three months',
        'more than three months' => 'more than three months',
        'not sure' => 'not sure'
    ];


    private function _validateProject($request)
    {
        return $request->validate(
            [
                'model' => 'required',
                'task_id' => 'required|integer',
                'duration' => 'required',
                'start_date' => 'required',
                'sub_task_id' => 'required|integer'
            ]
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'isActive']);
        $durationArray = $this->durationArray;
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
        $tasks = Tasks::pluck('name', 'id');
        $countries = Location::pluck('name', 'id');
        $duration = $this->durationArray;
        return view('projects.create', compact('tasks', 'countries', 'duration'));
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
        $validated_data = $this->_validateProject($request);
        if ($request->description) {
            $validated_data['description'] = $request->description;
        }

        if ($file = $request->file('attachment')) {
            $image_name = time() . $file->getClientOriginalName();
            $file->move('images', $image_name);
            $validated_data['attachment_url'] = $image_name;
        }
        $project = Project::create($validated_data);
        return redirect()->action(
            'ProjectController@show', ['id' => $project->id]
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return view('projects.show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
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
        //
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
