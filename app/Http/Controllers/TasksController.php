<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TasksController extends Controller
{
    protected $task;

    public function __construct(Tasks $task)
    {
        $this->task = $task;
    }

    public function taskWithSubTasks()
    {
        $tasks =  $this->task->with("subTasks:id,task_id,name")->paginate(20);
        return $tasks->count() ? ResponseHelper::sendSuccess($tasks) : ResponseHelper::notFound();
    }
    
    public function index()
    {
        $tasks =  $this->task->all();
        return $tasks->count() ? ResponseHelper::sendSuccess($tasks) : ResponseHelper::notFound();
    }

    public function store(Request $request)
    {
        $validatedData = $this->_validate($request);
        if ($validatedData->fails()) {
            return ResponseHelper::badRequest($validatedData->errors()->first());
        }

        $task = $this->task->create($request->only('name'));
        return $task ? ResponseHelper::sendSuccess($task) : ResponseHelper::serverError();
    }

    public function show($taskId)
    {
        $task =  $this->task->where('id', $taskId)->first();
        if ($task) {
            $task =  $this->task->where('id', $taskId)->with("subTasks")->first();
            return ResponseHelper::sendSuccess($task);
        }
        return ResponseHelper::notFound();
    }

    public function update(Request $request, $taskId)
    {
        $validatedData = $this->_validate($request);
        if ($validatedData->fails()) {
            return ResponseHelper::badRequest($validatedData->errors()->first());
        }

        $task =  $this->task->where('id', $taskId)->first();
        if ($task) {
            $task = $task->update($request->only('name'));
            return ResponseHelper::sendSuccess($task);
        }
        return ResponseHelper::notFound();
    }

    public function delete($taskId)
    {
        $task =  $this->task->where('id', $taskId)->first();
        if ($task) {
            $task->subTasks()->delete();
            $task->delete();
            return ResponseHelper::sendSuccess([]);
        }
        return ResponseHelper::notFound();
       
    }

    private function _validate($request)
    {
        return Validator::make($request->all(), 
            ['name' => 'required|min:3|unique:tasks']
        );
    }
}
