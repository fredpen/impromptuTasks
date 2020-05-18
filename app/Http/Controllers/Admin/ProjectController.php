<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ResponseHelper;
use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    protected $project;

    public function __construct(Project $project)
    {
        $this->project = $project;
    }

    public function fetchProjectWithStatus($status)
    {
        $projects =  $this->project->where('status', $status);
        return $projects->count() ? ResponseHelper::sendSuccess($projects->paginate(20)) : ResponseHelper::notFound();
    }
   
    public function fetchProjectWithModel($model)
    {
        $projects =  $this->project->where('status', $status);
        return $projects->count() ? ResponseHelper::sendSuccess($projects->paginate(20)) : ResponseHelper::notFound();
    }
   
    public function usersProject($userId)
    {
        $projects =  $this->project->where('user_id', $userId);
        return $projects->count() ? ResponseHelper::sendSuccess($projects->paginate(20)) : ResponseHelper::notFound();
    }

    // public function delete($projectId)
    // {
    //     $project =  $this->project->where(['id' => $projectId, 'deleted_on' => null])->first();
    //     if (! $project) {
    //         return ResponseHelper::notFound();
    //     }
    //     $project->delete();
    //     return $project ? ResponseHelper::sendSuccess([]) : ResponseHelper::serverError();
    //     // $project->owner->notify((new ProjectCancelled)->delay(10));
    // }


    // public function ajax(Request $request, $id)
    // {
    //     $project = Project::findOrFail($id);
    //     $this->authorize('edit', $project);
    //     $project->update([$request->field => $request->value]);
    //     if ($request->field == 'task_id') return SubTask::fetchSubtasksWithTaskId($request->value);
    //     if ($request->field == 'country_id') return Region::fetchRegionsWithCountryId($request->value);
    //     if ($request->field == 'region_id') return City::fetchCitiesWithRegionId($request->value);
    // }
    

    // private function validateCreateRequest($request)
    // {
    //     return Validator::make($request, [
    //         'model' => 'required', 
    //         'task_id' => 'required|integer',
    //         'num_of_taskMaster' => 'required|integer',
    //         'budget' => 'required',
    //         'experience' => 'required',
    //         'proposed_start_date' => 'required',
    //         'description' => 'required',
    //         'title' => 'required',
    //         'sub_task_id' => 'required|integer',
    //         'country_id' => 'required|integer',
    //         'city_id' => 'required|integer',
    //         'duration' => 'required',
    //     ]);
    // }


}
