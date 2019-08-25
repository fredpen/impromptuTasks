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

class AccountController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private function _user()
    {
        return Auth::User();
    }


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
        $user = $this->_user();
        $countries = Country::pluck('name', 'id');
        if ($user->role_id === 1) return view('taskGiver.edit', compact('user', 'countries'));

        $skills = new Skills();
        $tasks = Tasks::all();
        $skill_ids = $skills->skillArray($user);
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
        $user = $this->_user();
        $validatedData = $this->_validate($request);
        $validatedData['isActive'] = 1;
        $user->update($validatedData);

        if ($user->role_id === 1) {
            return view('projects.create');
        }

        // sync the skills of task master
        $skill_ids = $request->skills;
        $user->skills()->sync($skill_ids);  //update user skills
        return view('projects.index');
        return back();
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
}
