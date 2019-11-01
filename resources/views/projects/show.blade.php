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
            <div class="col-md-8">
                <!-- project card -->
                <div class="card d-block">
                    <div class="card-body">
                        
                        <!-- project title-->
                        <h3 class="mt-0">{{ ucfirst($project->title)}}</h3>
                        <span class="h6 text-dark">Posted On: {{$project->posted_on}}</span>

                        <div>
                            <span class="badge badge-secondary mb-3"> {{$project->task->name}}</span>
                            <span class="badge badge-secondary mb-3"> {{$project->subtask->name}}</span>
                            <span class="badge badge-secondary mb-3"> {{$project->model}}</span>
                        </div>



                        <h5>Task Overview:</h5>
                        <p class="text-muted mb-2"> {{$project->description}} </p>

                        <div class="row">
                            <div class="col-md-4">
                                <div class="mb-4">
                                    <h5>Number of Task master needed</h5>
                                    <p> {{ ucfirst($project->num_of_taskMaster)}} </p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Proposed Start Date</h5>
                                    <p> {{$project->start_date}} </p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Duration</h5>
                                    <p> {{$project->duration}} </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Posted On</h5>
                                    <p> {{$project->posted_on}} </p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Budget</h5>
                                    <p>$15,800</p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Task Model</h5>
                                    <p> {{ ucfirst($project->model)}} </p>
                                </div>
                            </div>

                            @if ($project->model == "onsite")
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <h5>Task Location</h5>
                                        <p> {{ ucfirst($project->location . ", " . $project->city->name . ", " . $project->region->name)}} </p>
                                    </div>
                                </div>
                            @endif
                        </div>

                        <div>
                            <h5>Tags:</h5>
                            @foreach ($project->task->subtasks as $subtask)
                            <a href="{{route("project.usershow", $subtask->id)}}" data-toggle="tooltip" data-placement="top" title="" data-original-title="{{$subtask->name}}" class="d-inline-block">
                            {{$subtask->name}}</a>
                            @endforeach

                        </div>


                       
                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col -->

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
                        <h5 class="card-title mb-3">Cover letter</h5>
                            <div class="p-0">
                                <div class="row align-items-center">
                                    <div class="col-sm-12">
                                        {!! Form::open(['action' => ['ProjectshowController@apply', $project->id ], 'method' => 'POST', 'id' => 'resume']) !!}
                                            <textarea name="resume" data-toggle="maxlength" class="mb-3 form-control" data-threshold="1000" maxlength="1000" rows="10" placeholder="Say why this task should be assigned to you in few words as possible"></textarea>
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
                            @if (Auth::user()->hasApplied($project->id))
                                <button type="button" class="btn btn-lg btn-secondary">You have applied for this task</button>
                            @elseif($project->hasBeenAssigned)
                                <button type="button" class="btn btn-lg btn-secondary">You have been assigned to this task</button>
                            @else
                                <a  style="cursor:pointer" onclick="submitResume()" class="btn btn-lg text-white btn-primary">Apply to Task</a>
                            @endif
                        @else 
                            <a  style="cursor:pointer" onclick="submitResume()" class="btn btn-lg text-white btn-primary">Apply to Task</a>
                        @endauth
                        @if ($project->hasBeenAssigned(Auth::id()))
                            <button type="button" class="btn btn-lg btn-secondary">You have been assigned to this task</button>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('scripts')
    <script src="{{ asset('js/form.js') }}"></script>
    <script>
        var project_id = {{ $project-> id}};
        function submitResume() 
        {
            $('#resume').submit();
        }
    </script>
@endsection
