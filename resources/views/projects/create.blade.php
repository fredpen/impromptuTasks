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

                            {!! Form::hidden('user_id', Auth::id()) !!}
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
                <h5 class="card-header">You do not have any task at the moment, Get started</h5>
            @endif
        </div>

        <div class="col-lg-12">
            @if (count($projects))
                <div class="card">
                    <div class="card-body">
                        {{-- <h5 class="header-title mb-3">Task history</h5> --}}
                        <div class="table-responsive">
                            <table class="table table-hosver table-centered mb-0">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Task Title <hr> Edit / View</th>
                                        <th class=""> Model </th>
                                        <th class="">Created on</th>
                                        <th>Status</th>
                                        <th class="">Budget(NGN)</th>
                                        <th>Payment</th>
                                        <th>Delete</th>   
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($projects as $project)
                                        <tr>
                                            <td  title="{{$project->title}}"> 
                                                <a class="" href="{{ route('projects.edit', $project->id) }}">
                                                    {{$project->title ? Str::limit($project->title, 50) : $project->task->name}}
                                                </a>
                                                <hr>
                                                
                                                @if ($project->status == 'Draft')
                                                    <a 
                                                        title="Your Task is still a Draft, You can view your project in live mode after posting it" 
                                                        class="action-icon">
                                                        <i class="mdi mdi-eye-circle text-muted"></i>
                                                    </a>
                                                @else
                                                    <a 
                                                        data-toggle="tooltip" 
                                                        data-original-title="View this Task as a Task Master would see it"
                                                        class="action-icon" 
                                                        href="{{ route('projects.show', $project->id) }}">
                                                        <i class="mdi mdi-eye-circle text-primary"></i>
                                                    </a>
                                                @endif

                                                @if (count($project->isAssigned()))
                                                    <span title="The task is in locked mode cos it has already been assigned to a task master" class="badge badge-secondary">Assigned</span>
                                                @else
                                                    <a class="action-icon" href="{{ route('projects.edit', $project->id) }} "><i class="mdi mdi-pencil text-primary"></i></a>
                                                @endif
                                            </td>
                                            <td class="">{{ucfirst($project->model)}}</td>
                                            <td class="">{{$project->created_at->diffForHumans()}}</td>
                                            <td ><span class="badge badge-{{$project->color($project->status)}}">{{ucfirst($project->status)}}</span></td>
                                            <td class="">{{$project->budget}}</td>

                                            <td>
                                                @if ($project->amount_paid)
                                                    <span class="badge badge-secondary">payment-verified </span>
                                                @else
                                                    @if ($project->status == 'posted')
                                                        <a href="{{ route('payment', $project->id) }}" class="badge badge-primary pointer"> make Payment </a>
                                                    @else
                                                        <span class="badge badge-secondary">Awaiting posting </span>
                                                    @endif
                                                @endif
                                            </td>
                                          
                                            <td onclick="submitForm('{{$project->id}}')" title="Delete this Task">
                                                <a class="pointer action-icon"><i class="mdi mdi-delete"></i></a>
                                            </td>
                                            {!! Form::open(['id' => $project->id, 'method' => 'DELETE', 'action' => ['ProjectController@destroy', $project->id]]) !!}
                                                {!! Form::hidden('project_id', $project->id) !!}
                                            {!! Form::close() !!}
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
            @endif
        </div>
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
