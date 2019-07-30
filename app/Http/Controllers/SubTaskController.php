<?php

namespace App\Http\Controllers;

use App\SubTask;
use Illuminate\Http\Request;

class SubTaskController extends Controller
{
    /**
     * Retruns array of validated data
     *
     * @return $arrayName = array('' => , );
     */
    private function _validate($request)
    {
        return $request->validate(
            [
                'name' => ['required', 'unique:sub_tasks'],
                'task_id' => 'required'
            ]
        );
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
    public function store(Request $request)
    {
        SubTask::create($this->_validate($request));
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SubTask  $subTask
     * @return \Illuminate\Http\Response
     */
    public function show(SubTask $subTask)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SubTask  $subTask
     * @return \Illuminate\Http\Response
     */
    public function edit(SubTask $subTask)
    {
        // return $subTask;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SubTask  $subTask
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubTask $subtask)
    {
        $subtask->update($this->_validate($request));
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SubTask  $subTask
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubTask $subtask)
    {
        $subtask->delete();
        return back();
    }
}
