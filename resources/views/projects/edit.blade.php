@extends('layouts.base')

@if ($message = Session::get('success'))
    {{message}}
@endif

@section('content')
<div class="container"  >

    {{-- errorBag --}}
    <div id="postingModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-dialog">
            <div class="jq-toast-single jq-icon-danger d-flex" role="alert">
                <i class="mr-2 mdi mdi-heart-broken-outline" style="font-size: 30px"></i>
                <span style="right: 0" class="close close-jq-toast-single" data-dismiss="modal" aria-hidden="true">×</span>
                <div id="postErrMess"></div>
            </div>
        </div>
    </div>

    

    <div  class="row justify-content-center align-items-center mx-0">

        <div class="col-md-10 mt-1 mb-3">
            <div class="page-title-right">
                <ol class="breadcrumb my-1 p-0">
                    <li class="breadcrumb-item h5"><a href="{{ route('projects.create') }}">My Projects</a></li>
                    <li class="text-capitalize breadcrumb-item active h5"> {{Str::limit($project->title, 10) }} </li>
                </ol>
            </div>

           
            <div id="basicwizard">
                <ul class="nav nav-pills nav-justified form-wizard-header mb-4">

                    <li class="nav-item">
                        <a href="#basictab1" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
                            <i class="mdi mdi-fountain-pen"></i>
                            <span class="d-none d-sm-inline">Basics</span>
                        </a>
                    </li>

                    @if ($project->model == "onsite")
                        <li class="nav-item">
                            <a href="#basictab5" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                <i class="mdi mdi-home-city mr-1"></i>
                                <span class="d-none d-sm-inline">Location</span>
                            </a>
                        </li>
                    @endif

                    <li class="nav-item">
                        <a href="#basictab2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                            <i class=" mdi mdi-square-edit-outline mr-1"></i>
                            <span class="d-none d-sm-inline">Description</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#basictab3" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                            <i class="mdi mdi-credit-card mr-1"></i>
                            <span class="d-none d-sm-inline">Payment </span>

                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#basictab4" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                            <i class=" mdi mdi-cloud-upload mr-1"></i>
                            <span class="d-none d-sm-inline">Files</span>
                        </a>
                    </li>

                </ul>

                <div class="tab-content b-0 mb-0">
                    @include('partials.projectEdit.tab1')

                    @if ($project->model == "onsite")
                        @include('partials.projectEdit.tab5') 
                    @endif

                    @include('partials.projectEdit.tab2')

                    @include('partials.projectEdit.tab3')
                  
                    @include('partials.projectEdit.tab4')


                    <div class="col-12">
                        <div class="form-group d-flex flex-wrap">
                            <div class="col-sm-12 col-md-6 mb-3 ">
                                {!! Form::open(['method' => 'PUT', 'action' => ['ProjectController@update', $project->id], 'id' => 'postForm']) !!}
                                    {!! Form::hidden('status', 'posted') !!}
                                {!! Form::close() !!}
                                <button 
                                    type="submit" 
                                    onclick="postProject(this, '{{$project->model}}')" 
                                    class="d-block mx-auto btn btn-lg btn-primary">
                                    {{ ($project->status == 'Draft') ? 'Post Task' : 'Update Task'}} 
                                </button>
                            </div>

                            <div class="col-sm-12 col-md-6">
                                {!! Form::open(['method' => 'DELETE', 'action' => ['ProjectController@destroy', $project->id], 'id' => 'postForm']) !!}
                                    <button type="submit" class="d-block mx-auto  btn-lg btn btn-danger">
                                    {{ ($project->status == 'Draft') ? 'Delete Task' : 'Cancel Task'}}  </button>
                                {!! Form::close() !!}
                            </div>
                        </div>
                    </div>

                    <ul class="list-inline wizard mb-3">
                        <li class="previous list-inline-item disabled">
                            <a href="#" class="btn btn-info" title="previous"><i class="dripicons-arrow-thin-left"></i></a>
                        </li>

                        <li class="next list-inline-item float-right">
                            <a href="#" class="btn btn-info"><i class="dripicons-arrow-thin-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
</div>
@endsection

@section('scripts')
    <script>
        var project_id = {{ $project-> id}};
        var is_onsite = {{$project->model == "onsite" ? 1 : 0}};

        Dropzone.autoDiscover = false;
        var dropzone = new Dropzone('#myAwesomeDropzone', {
            parallelUploads: 1,
            thumbnailHeight: 120,
            thumbnailWidth: 120,
            maxFilesize: 1, //1mb
            maxFiles: 3,
            filesizeBase: 1000,
            thumbnail: function (file, dataUrl) {
                if (file.previewElement) {
                    file.previewElement.classList.remove("dz-file-preview");
                    var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                    for (var i = 0; i < images.length; i++) {
                        var thumbnailElement = images[i];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.src = dataUrl;
                    }
                    setTimeout(function () {file.previewElement.classList.add("dz-image-preview"); }, 1);
                }
            }
        });

      

    </script>
@endsection
