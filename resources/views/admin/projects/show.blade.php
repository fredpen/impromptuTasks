@extends('layouts.admin')




@section('content')
    @include('partials.jumbotron', ['pageTitle' => ' project('.$project->id . ')'])

    <div class="row mt-3">

        {{-- assign task --}}
        @if ($project->status == "posted" || $project->status == "completed" || $project->status == "ongoing")
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-text">
                            <div class="table-responsive-sm">
                                <table class="table table-bordered table-centered mb-0">
                                    <thead class="thead-dark">
                                        <tr class="h6 text-uppercase">
                                            <th> Task Master Profile</th>
                                            <th> Resume </th>
                                            <th> Applied on</th>
                                            <th> Profile Image</th>
                                            <th> Ratings 1 - 10 </th>
                                            <th> Assign </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if ($project->taskMasters->count() > 0)
                                            @foreach ($project->taskMasters as $taskMaster)
                                                <tr>
                                                    <td class=""><a target="_blank" href="{{ route('account.show', $taskMaster->id) }}">{{ $taskMaster->name }}'s Profile</a></td>
                                                    <td class="">{{ ucfirst($taskMaster->pivot->resume) }} </td>
                                                    <td class="">{{ $taskMaster->created_at }}</td>     
                                                    <td class=""> 
                                                        <span class="account-user-avatar">
                                                            <img src="{{$taskMaster->imageurl ? asset('images/'.$taskMaster->imageurl)  : asset('images/basic.jpg')  }}" alt="{{$taskMaster->name}}" class="rounded-circle" style="max-width: 50px">
                                                        </span>
                                                    </td>
                                                    <td class=""> {{ $taskMaster->ratings }} </td>
                                                    <td class="h6"> 
                                                        @if ($project->hasBeenAssigned($taskMaster->id))
                                                            {!! Form::open(['method' => 'POST', 'action' => 'AdminProjectController@reassign']) !!}
                                                                {!! Form::hidden('user_id', $taskMaster->id) !!}
                                                                {!! Form::hidden('project_id', $project->id) !!}
                                                                {!! Form::submit('Withdraw Task ', ['class' => 'btn btn-danger']) !!}
                                                            {!! Form::close() !!}
                                                        @else
                                                            {!! Form::open(['method' => 'POST', 'action' => 'AdminProjectController@assign']) !!}
                                                                {!! Form::hidden('user_id', $taskMaster->id) !!}
                                                                {!! Form::hidden('project_id', $project->id) !!}
                                                                {!! Form::submit('Assign to '. $taskMaster->name, ['class' => 'btn btn-primary']) !!}
                                                            {!! Form::close() !!}
                                                        @endif
                                                    </td>
                                                </tr>
                                            @endforeach
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endif

        <div class="col-md-8 mt-5">
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

                            <div class="col-md-4">
                            <div class="mb-3">
                                <h5>Task | Subtask category</h5>
                                <p> {{ ucfirst($project->task->name)}} | {{ ucfirst($project->subtask->name)}}</p>
                            </div>
                        </div>

                        @if ($project->model == "onsite")
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <h5>Task Location</h5>
                                    <p> {{ ucfirst($project->location . ", " . $project->city->name . ", " . $project->region->name)}} </p>
                                </div>
                            </div>
                        @endif
                    </div>
                </div> <!-- end card-body-->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-md-4 mt-5">
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
                    <h5 class="card-title mb-3">Action Corner </h5>
                    <a href="{{ route('project.cancelled', $project->id) }}" class="text-white mb-2 btn btn-danger">Cancel Task</a><br>
                    <a href="{{ route('project.live', $project->id) }}" class="text-white mb-2 btn btn-success">Mark Task started</a><br>
                    <a href="{{ route('project.complete', $project->id) }}" class="text-white mb-2 btn btn-primary">Mark Task completed</a><br>
                    <a href="{{ route('project.posted', $project->id) }}" class="text-white mb-2 btn btn-primary">Re-post Task</a><br>
                </div>
            </div>
        </div>
    </div>
@endsection
