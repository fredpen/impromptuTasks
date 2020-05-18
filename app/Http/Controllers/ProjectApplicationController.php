<?php

namespace App\Http\Controllers;

use App\ProjectAppliedUser;
use App\Helpers\ResponseHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectApplicationController extends Controller
{
    protected $projectAppliedUser;

    public function __construct(ProjectAppliedUser $projectAppliedUser)
    {
        $this->middleware(['auth:api', 'verified', 'isActive']);
        $this->projectAssignedUser = $projectAppliedUser;
    }

    // this is where i am, i want to work on applying, withdrwaing applications and get applied user
    public function apply(Request $request)
    {
        $validatedData = $this->validateApply($request->all());
        if ($validatedData->fails()) {
            return ResponseHelper::badRequest($validatedData->errors()->first());
        }
        $data = $request->only(['resume', 'project_id']);
        // $data['user_id'] = Auth::id();
        // $this->projectAssignedUser->firstOrCreate($request);
        // Auth::user()->notify(new ProjectAppllication);
        // return back()->with("message", $this->applyMessage);
    }


    // public function accept(ProjectAssignedUser $projectAssignedUser) 
    // {
    //     $projectAssignedUser->update(['status' => 'accepted']);
    //     return redirect()->action('AccountController@show', $projectAssignedUser->user_id)->with("message", $this->acceptMessage);
    // }

    private function validateApply($request)
    {
        return Validator::make($request, [
            'project_id' => 'required',
            'resume' => 'required',
        ]);
    }
}
