<?php

namespace App\Http\Controllers;

use App\Country;
use App\ProjectAppliedUser;
use App\Tasks;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AccountController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware(['isActive'])->only('show');

    }

    private function validateTaskMaster($request)
    {
        return $request->validate(
            [
                'country_id' => 'required',
                "region_id" => 'required',
                'city_id' => 'required',
                'address' => 'required',
                'title' => 'required',
                'name' => 'required',
                'bio' => 'required',
                'address' => 'required',
                'linkedln' => 'min:0'
            ]
        );
    }

    private function validateTaskGiver($request)
    {
        return $request->validate(
            array(
                'country_id' => 'required',
                "region_id" => 'required',
                'city_id' => 'required',
                'address' => 'required',
                'name' => 'required',
                'linkedln' => 'min:0'
            )
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);

        if ($user->isTaskGiver()) return view('taskGiver.show', compact('user'));

        $skill_ids = $user->fetchskillsId();
        return view('taskMaster.show', compact('user', 'skill_ids'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if (Auth::id() != $id) abort('403'); // policy check
        $user = User::findOrFail($id);
        $countries = Country::get(['name', 'id']);
        if ($user->isTaskGiver()) return view('taskGiver.edit', compact('user', 'countries'));

        $skill_ids = $user->fetchskillsId();
        $tasks = Tasks::get(['id', 'name']);
        return view('taskMaster.edit', compact('user', 'tasks', 'skill_ids', 'countries'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Auth::id() != $id) abort('403'); //policy check
        $user = User::findOrFail($id);
        $validatedData = ($user->role_id == 1) ? $this->validateTaskGiver($request) : $this->validateTaskMaster($request); //validate request inputs
        $validatedData['isActive'] = 1;
        $user->update($validatedData);

        if ($request->skills) $user->skills()->sync($request->skills);  //update user skills
        return redirect()->action('AccountController@show', $id)->with("message", "Profile updated Successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function notifications()
    {
        $user =  Auth::user();
        $allNotifications =  $user->notifications;
        $unreadNotifications =  $user->unreadNotifications;
        $user->unreadNotifications->markAsRead();
        return view('notifications', compact('unreadNotifications', 'allNotifications'));
    }

    public function myTasks()
    {
        $assignedProjects = Auth::user()->assignedProjects;
        $appliedProjects = Auth::user()->appliedProjects;
        return view('taskMaster.myTask', compact('assignedProjects', 'appliedProjects'));
    }
}
