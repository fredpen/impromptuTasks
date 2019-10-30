<?php

namespace App\Http\Controllers;

use App\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private function _validate($request)
    {
        return $request->validate(
            ['name' => 'required|min:3|unique:tasks']
        );
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks =  Tasks::with("subTasks:id,task_id,name")->paginate(20);
        return view('admin.tasks.index', compact('tasks'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Tasks $tasks)
    {
        $validatedData = $this->_validate($request);
        $tasks->storeTasks($validatedData['name']);
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tasks $task)
    {
        if (!Auth::user()->isAdmin()) abort('403');

        $sub_tasks = $task->subTasks;
        return view('admin.tasks.show', compact('task', 'sub_tasks'));
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tasks $task)
    {
        $validatedData = $this->_validate($request);
        $task->update($validatedData);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tasks $task)
    {
        $task->subTasks()->delete();
        $task->delete();
        return back();
    }
}
