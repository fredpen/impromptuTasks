<?php

namespace App\Http\Controllers;

use App\Country;
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
    }

    private function _validate($request)
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
        $user = User::findOrFail($id);
        if (!$user->isActive()) return redirect()->action('AccountController@edit', $id)->with('message', 'Kindly Complete your profile to have full access');

        if ($user->isTaskGiver()) return view('taskGiver.shomessw', compact('user'));

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
        $validatedData = $this->_validate($request);
        $validatedData['isActive'] = 1;
        $validatedData['linkedln'] = $request->linkedln;
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
}
