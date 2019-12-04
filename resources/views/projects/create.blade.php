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
        <div class="col-sm-4">
            <button data-toggle="modal" data-target="#fredTaskMode" type="button" class="btn btn-danger btn-rounded my-3"><i class="mdi mdi-plus"></i> Create new Task</button>
        </div>
    </div>

    <div id="root" class="row">
       
        <div class="col-lg-12">
            <div id="accordion" class="custom-accordion mb-4">

                <div class="card mb-3">
                    <div class="card-header" id="headingOne">
                        <h5 class="m-0">
                            <a class="custom-accordion-title d-block pt-2 pb-2" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Your Draft{{(count($draftProjects) > 1) ? "s" : ""}} ({{count($draftProjects)}})
                                <span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i>click to open</span>
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

                {{-- <div class="card mb-0">
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
                                            <div class="h4 m-0 float-right">
                                                <a class=" my-0 mx-1" href="{{route('projects.edit', $project->id)}}"><i class="mdi mdi-pencil text-primary"></i></a>
                                                <a class="my-0 mx-1" href="{{route('projects.show', $project->id)}}"><i class="mdi mdi-eye text-primary"></i></a>
                                                <span onclick="submitForm({{$project->id}})" class="pointer my-0 mx-1"><i class="mdi mdi-delete text-danger"></i></span>
                                                {!! Form::open(['id' => $project->id, 'method' => 'DELETE', 'action' => ['ProjectController@destroy', $project->id]]) !!}
                                                    {!! Form::hidden('project_id', $project->id) !!}
                                                {!! Form::close() !!} 
                                            </div>
                                                    
                                            <a href=" {{ route('projects.show', $project->id) }} ">{{ $project->title }} </a>
                                            @if ($project->location)
                                                <ul class="d-block mb-0 list-inline">
                                                    <li class="list-inline-item mr-3">
                                                        <h5 class="mb-1"> NGN {{ $project->budget ?  $project->budget : "0"}}</h5>
                                                        <p class="mb-0 ">City</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <h5 class="mb-1"> {{ $project->num_of_taskMaster ?  $project->num_of_taskMaster : "0"}}</h5>
                                                        <p class="mb-0 ">Number of Orders</p>
                                                    </li>
                                                </ul>
                                                    <span class="d-block h5">City: {{$project->city->name}} </span>
                                                    <span class="d-block h5">Region: {{$project->region->name}} </span>
                                                    <span class="d-block h5"> {{$project->country->name}}  </span>
                                                    <div class="d-block h5"><i class="mdi mdi-home"></i> Location:</div>
                                                    <div>
                                                            <span class="d-block h5"> {{$project->location . ", " . $project->city->name}} </span>
                                                            <span class="d-block h5"> {{$project->country->name}}  </span>
                                                    </div>
                                            @endif
                                        </h5>
                                    </div>
                                </div>

                                <div class="media-body col-sm-12 mt-3">
                                    <p class=" text-dark mb-2">
                                        <span class="mb-2 badge badge-light badge-pill" style="font-size:100%"> {{ $project->experience }} </span>
                                    </p>

                                    <p class=""> {{ Str::limit($project->description, 300) }}</p>
                                   
                            
                                    <ul class="mb-0 list-inline">
                                        <li class="list-inline-item mr-3">
                                            <h5 class="mb-1"> NGN {{ $project->budget ?  $project->budget : "0"}}</h5>
                                            <p class="mb-0 ">Total Budget</p>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="mb-1"> {{ $project->num_of_taskMaster ?  $project->num_of_taskMaster : "0"}}</h5>
                                            <p class="mb-0 ">Number of Orders</p>
                                        </li>
                                    </ul>
                                    
                                    <a href="{{ route('account.show', $project->id) }}" class="mt-3 btn btn-primary">View {{$project->title}}'s Profile</a>
                                </div>
                                </div>
                            </div>
                            <hr>
                        @endforeach
                    </div>
                </div>  --}}
            </div> 
        </div>

        <div class="col-sm-12 mb-3 text-dark fade show" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="m-2">{{count($notDraftProjects)}} Posted Project{{(count($notDraftProjects) > 1) ? "s" : ""}}</strong>
            </div>
        </div>

        @if (count($notDraftProjects))
            @foreach ($notDraftProjects as $project)
                <div class="col-md-6 col-xl-4">
                    <div class="card d-block">
                        <div class="card-body">
                            <div class="dropdown card-widgets">
                                <a href="#" class="dropdown-toggle arrow-none" data-toggle="dropdown" aria-expanded="false">
                                    <i class="h3 mdi mdi-fountain-pen-tip"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="{{ route('projects.show', $project->id) }}" class="dropdown-item"><i class="mdi mdi-eye mr-1"></i>View</a>
                                    @if (!$project->isAssigned())
                                        <a href="{{ route('projects.edit', $project->id) }}" class="dropdown-item"><i class="mdi mdi-pencil mr-1"></i>Edit</a>
                                    @endif
                                    <span onclick="submitForm('{{$project->id}}')"  class="dropdown-item"><i class="mdi mdi-delete mr-1"></i>delete</span>
                                    {!! Form::open(['id' => $project->id, 'method' => 'DELETE', 'action' => ['ProjectController@destroy', $project->id]]) !!}
                                        {!! Form::hidden('project_id', $project->id) !!}
                                    {!! Form::close() !!}
                                </div>
                            </div>
                            <!-- project title-->
                            <h4 class="mt-0">
                                <a href="{{route('projects.show', $project->id)}}" class="text-title text-primary">{{$project->title}}</a>
                            </h4>
                            <div class="badge badge-{{$project->color()}} mb-3">{{$project->status}}</div>
                            <div class="badge badge-{{$project->color()}} mb-3">{{  ($project->isAssigned()) ? 'Assigned' : 'Unassigned'}}</div>

                            <p class="text-muted mb-2">{{ Str::limit($project->description, 150) }}
                                <a href="{{route('projects.show', $project->id)}}" class="font-weight-bold text-primary">view more</a>
                            </p>

                            <!-- project detail-->
                            <p class="mb-1">
                                <span class="pr-2 text-nowrap mb-2 d-inline-block">
                                    Budget: <b class="text-dark text-capitalize"><i class="mdi mdi-currency-ngn"></i>{{$project->budget}}</b>
                                </span>
                                
                                <span class="text-nowrap mb-2 d-inline-block">
                                    Model: <b class="text-dark text-capitalize">{{$project->model}}</b>
                                </span>
                            </p>
                            <p class="float-right"><small>updated {{$project->updated_at->diffForHumans()}}</small></p>
                        </div> <!-- end card-body-->
                        <ul class="list-group list-group-flush">
                                
                            <li class="list-group-item p-3">
                                @if ($project->amount_paid)
                                    <button type="button" class="btn btn-secondary">Payment verified</button>
                                @else
                                    <a class="btn btn-primary" href="{{ route('payment', $project->id) }}">Make payment</a>
                                @endif
                            </li>
                        </ul>
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
