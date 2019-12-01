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
                        <h6 class="m-0 font-weight-light cta-box-title">Post your task and get <br> task projects assigned to you immediately</h6>
                        <button type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredTaskMode">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="root" class="row">
        <div class="col-lg-12">

            <div id="accordion" class="custom-accordion mb-4">

                <div class="card mb-3">
                    <div class="card-header" id="headingOne">
                        <h5 class="m-0">
                            <a class="custom-accordion-title d-block pt-2 pb-2" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {{count($draftProjects)}} Draft Project{{(count($draftProjects) > 1) ? "s" : ""}}
                                <span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                        @if (count($draftProjects))
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-centered m-0"">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Task Title / Task type</th>
                                                <th> Model </th>
                                                <th>Updated </th>
                                                <th>Budget</th>
                                                <th>Delete</th>   
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($draftProjects as $project)
                                                <tr>
                                                    <td  title="{{$project->title}}"> 
                                                        <a class="" href="{{ route('projects.edit', $project->id) }}">
                                                            {{$project->title ? Str::limit($project->title, 50) : $project->task->name}}
                                                            <i class="mdi mdi-pencil text-primary"></i>
                                                        </a>
                                                    </td>
                                                    <td class="">{{ucfirst($project->model)}}</td>
                                                    <td class="">{{$project->updated_at->diffForHumans()}}</td>
                                                    <td>
                                                        @if ($project->budget)
                                                            <span class="badge badge-secondary">{{$project->budget}} </span>
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
                        @else
                            <p class="m-4">You do not have any draft projects</p>
                        @endif
                    </div>
                </div> 

                <div class="card mb-0">
                    <div class="card-header" id="headingTwo">
                        <h5 class="m-0">
                            <a class="custom-accordion-title d-block pt-2 pb-2" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                {{count($postedProjects)}} Posted Project{{(count($postedProjects) > 1) ? "s" : ""}}
                                <span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    
                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                        @foreach ($postedProjects as $project)
                            <div class="card-body">
                                <div class="media">
                                    <div class="media-body col-sm-12">
                                        <h5 class="mt-0"> 
                                            <a title="Edit Task" class="" href=" {{ route('projects.show', $project->id) }} ">{{ $project->title }} </a>

                                            <div class="h4 m-0 float-right">
                                                <a class=" my-0 mx-1" href="{{route('projects.edit', $project->id)}}"><i class="mdi mdi-pencil text-primary"></i></a>
                                                <a class="my-0 mx-1" href="{{route('projects.show', $project->id)}}"><i class="mdi mdi-eye text-primary"></i></a>
                                                <span onclick="submitForm({{$project->id}})" class="pointer my-0 mx-1"><i class="mdi mdi-delete text-danger"></i></span>
                                            </div>
                                            {!! Form::open(['id' => $project->id, 'method' => 'DELETE', 'action' => ['ProjectController@destroy', $project->id]]) !!}
                                                {!! Form::hidden('project_id', $project->id) !!}
                                            {!! Form::close() !!} 

                                                

                                            <span class="d-block h5"  class=""><i class="mdi mdi-briefcase-account"></i> {{ $project->title }}     </span>
                                            {{-- <span class="d-block"  class=""><i class="mdi mdi-flag"></i> {{ $project->region->name . ", " . $project->country->name }}     </span> --}}
                                        </h5>
                                    </div>
                                </div>

                                <div class="media-body col-sm-12 mt-3">
                                    <p class="font-13 text-dark mb-2">
                                        <span class="mb-2 badge badge-light badge-pill" style="font-size:100%"> {{ $project->experience }} </span>
                                    </p>

                                    <p class="font-13"> {{ Str::limit($project->description, 300) }}</p>
                                   
                            
                                    <ul class="mb-0 list-inline">
                                        <li class="list-inline-item mr-3">
                                            <h5 class="mb-1"> NGN {{ $project->budget ?  $project->budget : "0"}}</h5>
                                            <p class="mb-0 font-13">Total Budget</p>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="mb-1"> {{ $project->num_of_taskMaster ?  $project->num_of_taskMaster : "0"}}</h5>
                                            <p class="mb-0 font-13">Number of Orders</p>
                                        </li>
                                    </ul>
                                    
                                    <a href="{{ route('account.show', $project->id) }}" class="mt-3 btn btn-primary">View {{$project->title}}'s Profile</a>
                                </div>
                                </div>
                            </div>
                            <hr>
                        @endforeach
                    </div>
                </div> 
            </div> 
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
