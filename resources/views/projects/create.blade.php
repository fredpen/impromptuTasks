@extends('layouts.base')

@section('content')
<div class="container">


    @if ($errors->any())
        @include('partials.notifs')
    @endif

    {{-- task model selection --}}
    <div id="fredTaskMode" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-top">
            {!! Form::open(['method' => 'POST', 'action' => 'ProjectController@store', 'id' => 'taskModelForm']) !!}
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="text-primary modal-title" id="myModalLabel">Post a Task </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12 mb-3 d-flex space-around flex-wrap">
                            {!! Form::label('model', ' Tell us the delivery model of your task', ['class' => 'align-self-center col-sm-12 text-primary']) !!}
                            <div id="modelFormAlertMessage" class="d-none text-danger">Kindly select an option </div>

                            <div class="custom-control custom-radio col-sm-12 ml-3 mt-2">
                                <input type="radio" id="remote" name="model" class="custom-control-input" value="remote">
                                <label class="custom-control-label" for="remote">Remote</label>
                            </div>
                            <div class="custom-control custom-radio ml-3 mt-2">
                                <input type="radio" id="onsite" name="model" class="custom-control-input" value="onsite">
                                <label class="custom-control-label" for="onsite">OnSite</label>
                            </div>
                        </div>

                        <div class="col-12 mb-3">
                            {!! Form::label('task_id', 'Task -What do you want to get done', ['class' => 'align-self-center col-sm-12 text-primary']) !!}
                            {!! Form::select("task_id", $tasks, null, ['class' =>  'col-sm-7 form-control select2 select2-hidden-accessible form-control', 'data-toggle' => 'select2']) !!}
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                        <button onclick="createProject('model', this)" type="button" class="btn btn-primary">Continue</button>
                    </div>
                </div>
            {!! Form::close() !!}
        </div>
    </div>

    <div class="row mt-2">
        <div class="col-lg-4">
            <div class="card cta-box bg-primary text-white mt-1">
                <div class="card-body">
                    <div class="text-center">
                        <h6 class="m-0 font-weight-light cta-box-title">Post your task and get <br> task masters assigned to you immediately</h6>
                        <button type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredTaskMode">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-sm-12 mb-3">
            @if (count($projects))
                <h5 class="card-header">{{count($projects)}} Task{{count($projects) > 1 ? "s" : ""}} found</h5>
            @else
                <h5 class="card-header">Post Your frst task</h5>
            @endif
        </div>

        @if (count($projects))
            @foreach ($projects as $project)
                <div class="col-lg-6">
                    <div class="card widget-flat">
                        <div class="card-body mt-0" style="position: relative;">
                            <div class="float-right">
                                <span class="h6 text-muted mt-0" title="Revenue">{{$project->created_at->diffForHumans()}}</span>
                            </div>

                            @if ($project->title)
                                <a class="h5 d-block mb-1 mt-0" href="{{ route('projects.show', $project->id) }} ">{{$project->title}}</a>
                                <p  class="mb-0">{{str_limit($project->description, 100) }} <a href="{{ route('projects.show', $project->id) }} ">more</a></p>
                            @else
                                <p class="">Task title or task description is still missing<br> finish  posting this task
                                    <a href="{{ route('projects.edit', $project->id) }}"> here</a>
                                </p>
                            @endif

                            <div class="row">
                                <div class="col-sm-4 col-md-4 col-lg-6">
                                    <p class="d-block m-2">Model:
                                        <span class="mb-0 text-primary">{{$project->model}}</spam>
                                    </p>
                                </div>

                                <div class="col-md-4 col-lg-6">
                                    <p class="d-block m-2">Category:
                                        <span class="mb-0 text-primary">{{$project->task->name}}</span>
                                    </p>
                                </div>

                                 <div class="col-md-4 col-lg-6">
                                    <p class="d-block m-2">Status:
                                        <span class="mb-0 text-primary">{{$project->status}}</spam>
                                    </p>
                                </div>
                            </div>



                            <div class="col-12">
                                <div class="form-group row mt-2 mb-0">
                                    <div class="col-md-6">
                                        <button type="submit" class="btn btn-sm btn-primary">
                                            <a class="text-white" href="{{ route('projects.edit', $project->id) }} ">Edit Task</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach

        @endif
    </div>
@endsection

@section('scripts')
    <script>
        function createProject(target) {
            let taskModel = $("input[name=" + target + "]:checked").val();
            if (!taskModel) {
               return $('#modelFormAlertMessage').removeClass('d-none');
            }
            $('#taskModelForm').submit();
        }
    </script>
@endsection
