@extends('layouts.base')

@section('styles')
@endsection

@section('content')
    <div id="full_width_container">
        <div class="jumbotron jumbotron-fluid bg-secondary text-white">
          <div class="container">
            @guest
                <h1 class="display-5">Hire Task Master.</h1>
                <h1 class="display-6">Be more productive.</h1>
                <p class="lead">Let our qualified task manager handle your tasks. Hire talent nearby or worldwide.</p>
                <a class="btn btn-lg btn-primary m-2" href="{{ route('register') }}">Get Started</a>
            @else
                @if (Auth::user()->isTaskMaster())
                    <h1 class="display-5">Apply to Tasks</h1>
                    <h1 class="display-6">Earn doing what you love.</h1>
                    <p class="lead">Apply to the list of growing Tasks that suits your skill set</p>
                    <a class="btn btn-lg btn-primary m-2" href="{{ route('register') }}">Get Started</a>
                @else
                    <h1 class="display-5">Hire Task Master.</h1>
                    <h1 class="display-6">Be more productive.</h1>
                    <p class="lead">Let our qualified task manager handle your tasks. Hire talent nearby or worldwide.</p>
                    <a class="btn btn-lg btn-primary m-2" href="{{ route('register') }}">Get Started</a>
                @endif
            @endguest

          </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center mt-3">

            <hometasks></hometasks>
            @foreach ($tasks as $task)

                <div class="col-md-6 col-xl-4">
                    <div class="card d-block">
                        <div class="card-body" style="height:178px">
                            <h4 class="mt-0">
                                <a href="{{ route('project.usershow', $task->id) }}" class="text-title text-primary">{{ ucwords($task->name) }}</a>
                            </h4>
                            <div class="badge badge-success mb-3"></div>

                            @php
                                $subTaskString = "";
                                foreach ($task->subtasks as $subtask) {
                                    $subTaskString = $subTaskString . $subtask->name . ", ";
                                }
                            @endphp
                            <p class="text-muted  mb-3"><a href="{{ route('project.usershow', $task->id) }}" class="font-weight-bold text-muted">{{ ucwords(str_limit($subTaskString, 100)) }}</a>
                            </p>

                            <p class="mb-1">
                                <span class="pr-2 text-nowrap mb-2 d-inline-block">
                                    <i class="mdi mdi-format-list-bulleted-type text-muted"></i>
                                    <b>{{ count($task->subtasks) }}</b> Sub Tasks
                                </span>
                            </p>
                        </div> 
                    </div> 
                </div>
            @endforeach
        </div>
    </div>
@endsection
