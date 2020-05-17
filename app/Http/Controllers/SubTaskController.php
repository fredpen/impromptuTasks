<?php

namespace App\Http\Controllers;

use App\SubTask;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Helpers\ResponseHelper;

class SubTaskController extends Controller
{
    protected $subTask;

    public function __construct(SubTask $subTask)
    {
        $this->subTask = $subTask;
    }

    public function index()
    {
        $subTasks =  $this->subTask;
        return $subTasks->count() ? ResponseHelper::sendSuccess($subTasks->paginate(20)) : ResponseHelper::notFound();
    }

    public function store(Request $request)
    {
        $validatedData = $this->_validate($request);
        if ($validatedData->fails()) {
            return ResponseHelper::badRequest($validatedData->errors()->first());
        }

        $subTask =  $this->subTask->where('id', $request->task_id)->first();
        if ($subTask) {
            $subTask = $this->subTask->create($request->only(['name', 'task_id']));
            return ResponseHelper::sendSuccess($subTask);
        }
        return ResponseHelper::notFound();
    }

    public function show($subTaskId)
    {
        $subTask =  $this->subTask->where('id', $subTaskId)->first();
        return $subTask ? ResponseHelper::sendSuccess($subTask) : ResponseHelper::notFound();
    }

    public function update(Request $request, $subTaskId)
    {
        $validatedData = $this->_validateName($request);
        if ($validatedData->fails()) {
            return ResponseHelper::badRequest($validatedData->errors()->first());
        }

        $subTask =  $this->subTask->where('id', $subTaskId)->first();
        if ($subTask) {
            $subTask = $subTask->update($request->only('name'));
            return ResponseHelper::sendSuccess($subTask);
        }
        return ResponseHelper::notFound();
    }

    public function delete($subTaskId)
    {
        $subTask =  $this->subTask->where('id', $subTaskId)->first();
        if ($subTask) {
            $subTask->delete();
            return ResponseHelper::sendSuccess([]);
        }
        return ResponseHelper::notFound();
       
    }

    private function _validate($request)
    {
        return Validator::make($request->all(), [
            'name' => ['required', 'unique:sub_tasks'],
            'task_id' => 'required'
        ]);
    }
    
    private function _validateName($request)
    {
        return Validator::make($request->all(), [
            'name' => ['required', 'unique:sub_tasks']
        ]);
    }
}