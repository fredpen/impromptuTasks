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
        <div class="card col-sm-12">
            <h5 class="card-header">Previous Taks</h5>
        </div>

        @if (count($projects) > 0)
            @foreach ($projects as $project)
                <div class="col-xl-4 col-lg-4">
                    <div class="card widget-flat">
                        <div class="card-body" style="position: relative;">
                            <div class="float-right">
                                <button type="button" class="btn btn-sm btn-light">View</button>
                            </div>
                            <h6 class="text-muted text-uppercase mt-0" title="Revenue">{{$project->created_at->diffForHumans()}}</h6>
                            <h3 class="mb-4 mt-2">324</h3>

                            <div class="row text-center">
                                <div class="col-6">
                                    <h6 class="text-truncate d-block">Last Month</h6>
                                    <p class="font-18 mb-0 text-success">+15%</p>
                                </div>
                                <div class="col-6">
                                <h6 class="text-truncate d-block">project id equals {!!$project->id!!}</h6>

                                    <p class="font-18 mb-0"><a href="{{ route('projects.edit', $project->id) }} ">edit</a></p>
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
