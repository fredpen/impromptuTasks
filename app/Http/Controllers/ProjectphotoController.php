<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Projectphoto;
use App\Project;
use Illuminate\Support\Facades\Storage;
use App\User;

class ProjectphotoController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**Projectphoto
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
    public function store(Request $request, Projectphoto $projectphoto)
    {
        $file = $request->file('file');
        $image_name = $projectphoto->saveFile($file);
        
        if ($userId = $request->profilePicture) {
            $user = User::findOrFail($userId);
            $user->update(['imageurl' => $image_name]);
        } else {
            $project = Project::findOrFail($request->project_id);
            if ($project->photos->count() >= 3) return false;
            $projectphoto->create(['url' => $image_name, 'project_id' => $request->project_id]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $file = Projectphoto::findOrFail($id);
        unlink(public_path() . "/images/".$file->url);
        $file->delete();
    }
}
