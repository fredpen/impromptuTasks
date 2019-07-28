<?php

namespace App\Http\Controllers;

use App\Skills;
use App\Tasks;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }



    private function _validate($request)
    {
        return $request->validate(
            ['title' => 'required|min:3|max:100']
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private function _user()
    {
        return Auth::User();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return "aasasa";
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
        $skills = new Skills();
        $skill_ids = $skills->skillArray($user);
        $tasks = Tasks::all();
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
        $validatedData = $this->_validate($request);



        $skill_ids = $request->skills;
        $user = $this->_user();
        $user->skills()->sync($skill_ids);
        $user->update($validatedData);
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
