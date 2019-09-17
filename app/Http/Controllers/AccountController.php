<?php

namespace App\Http\Controllers;

use App\City;
use App\Country;
use App\Region;
use App\Role;
use App\Skills;
use App\Tasks;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\SubTask;

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
    }

    private function _validate($request)
    {
        return $request->validate(
            [
                'country_id' => 'required',
                "region_id" => 'required',
                'city_id' => 'required',
                'address' => 'required'
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if (Auth::id() === $id) abort('403');
        $user = User::findOrFail($id)->first();
        $countries = Country::pluck('name', 'id');
        if (!$user->isTaskMaster()) return view('taskGiver.edit', compact('user', 'countries'));

        $skill_ids = $user->fetchskillsId();
        $tasks = Tasks::with(['subTasks:id,name,task_id'])->get(['id', 'name']);
        return view('taskMaster.edit', compact('user', 'tasks', 'skill_ids'));
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
        $user = User::findOrFail($id)->first();
        $validatedData = $this->_validate($request);
        $validatedData['isActive'] = 1;
        $user->update($validatedData);

        if ($user->isTaskMaster()) return view('projects.create');

        // sync the skills of task master
        $user->skills()->sync($request->skills);  //update user skills
        return view('projects.index');
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
}
