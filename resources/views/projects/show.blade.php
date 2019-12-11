@extends('layouts.base')

@section('content')
    @if (session('message'))
        @include('partials.notifs')
    @endif

    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="container">
        <div class="row mt-3">

             {{-- breadcrumbs --}}
             <div class="col-sm-12">
                <div class="page-title text-left w-100">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="{{route('home')}}">Tasks</a></li>
                        <li class="text-capitalize breadcrumb-item active"><a href="{{route('project.usershow', $project->task->id)}}">{{$project->task->name}}</a></li>
                        <li class="breadcrumb-item active">{{ Str::limit($project->title, 15)}}</li>
                    </ol>
                </div>
             </div>
           

            <div class="col-md-8">
                <!-- project card -->
                <div class="card d-block">
                    <div class="card-body">
                        
                        <!-- project title-->
                        <h3 class="mt-0">{{ ucfirst($project->title)}}</h3>
                        <a href="{{route('project.usershow', $project->task->id)}}">{{$project->task->name . " - " . $project->subtask->name}}</a><br>
                        <span class="h6 text-dark">Updated On: {{$project->posted_on}}</span> 
                        <hr>

                        <h5>Task Overview: </h5>
                        <p class="text-muted mb-2"> {{$project->description}} </p>
                        <hr>

                        <div class="table-responsive-sm">
                            <table class="table table-striped table-centered mb-0">
                                <tbody>
                                    <tr>
                                        <td style="border:0">Model: <b class="text-dark text-capitalize">{{$project->model}}</b></td>
                                        <td style="border:0">Budget: <b class="text-dark text-capitalize"><i class="mdi mdi-currency-ngn"></i>{{$project->budget}}</b></td>
                                    </tr>
                                    <tr>
                                        <td style="border:0">Payment: 
                                            <b class="text-dark text-capitalize">{{$project->amount_paid ? "Payment Verfied" : 'Payment unverified' }}</b></td>
                                        <td style="border:0">Proposed Start Date: <b class="text-dark text-capitalize">{{$project->proposed_start_date}}</b></td>
                                    </tr>
                                    <tr>
                                        <td style="border:0">Duration: <b class="text-dark text-capitalize">{{$project->duration}}</b></td>
                                        <td style="border:0">Number of Task Master needed: <b class="text-dark text-capitalize">{{$project->num_of_taskMaster}}</b></td>
                                    </tr>
                                    @if ($project->model == "onsite")
                                        <tr>
                                            <td style="border:0">
                                                Location: <b class="text-dark text-capitalize">{{$project->city->name . ", " . $project->region->name}}</b>
                                            </td>
                                            <td style="border:0">
                                                Address: <b class="text-dark text-capitalize">{{Str_limit($project->location, 10)}}...........</b>
                                            </td>
                                        </tr>
                                        
                                    @endif
                                </tbody>
                            </table>
                            <p class="pt-3 h5 text-info">Note: Full adress are only shown to Task master after the project has been assigned to them</p>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Files</h5>

                        @if (count($project->photos) > 0)
                            @foreach ($project->photos as $key => $photo)
                                <div class="card mb-1 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title rounded"><i class="dripicons-download"></i>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="{{asset('images/'.$photo->url)}}" target="_blank" download>Supporting Document {{$key + 1}} </a>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="{{ asset('images/' . $photo->url) }}" download class="btn btn-link btn-lg text-muted">

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @else
                            <span class="h6">No document was attached for this task</span>
                        @endif
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-1">Resume</h5>
                            <div class="p-0">
                                <div class="row align-items-center">
                                    <div class="col-sm-12">
                                        {!! Form::open(['action' => ['ProjectshowController@apply', $project->id ], 'method' => 'POST', 'id' => 'resume']) !!}
                                            <textarea name="resume" data-toggle="maxlength" class="mb-3 form-control" data-threshold="1000" maxlength="1000" rows="7" placeholder="Say why this task should be assigned to you in few words as possible"></textarea>
                                            {!! Form::hidden('project_id', $project->id) !!}
                                            {!! Form::hidden('user_id', Auth::id()) !!}
                                        {!! Form::close() !!}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mt-2 mb-1">
                        @auth
                            @if (!Auth::user()->isTaskGiver())
                                @if ($project->hasBeenAssigned(Auth::id()))
                                    <button title="The task has been assigned to you " type="button" class="btn btn-lg btn-secondary">Task assigned to you</button>
                                @elseif(Auth::user()->hasApplied($project->id))
                                    <button type="button" class="btn btn-lg btn-secondary">You have applied for this task</button>
                                @else
                                    <a onclick="submitForm('resume')" class="pointer btn btn-lg text-white btn-primary">Apply to Task</a>
                                @endif
                            @endif
                        @else 
                            <a onclick="submitForm('resume')" class="pointer btn btn-lg text-white btn-primary">Apply to Task</a>
                        @endauth
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('scripts')
    <script>
        var project_id = {{ $project-> id}};
    </script>
@endsection
