@extends('layouts.base')

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/fontawesome.css') }}">
@endsection

@section('content')
    <div id="full_width_container">
        <div class="jumbotron jumbotron-fluid bg-secondary text-white p-3">
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

            @foreach ($tasks as $task)
                <div class="col-md-4">
                    <div class="card">
                        <a class="text-xs-center text-muted" href="{{ route('project.usershow', $task->id) }}">
                            <div class="card-title text-white p-2 bg-primary d-flex justify-content-between">
                                <h4> {{ ucwords($task->name) }} </h4>
                            </div>

                            @php
                                $subTaskString = "";
                                foreach ($task->subtasks as $subtask) {
                                    $subTaskString = $subTaskString . $subtask->name . ", ";
                                }
                            @endphp
                            <p class="p-2 card-text">{{ ucwords(str_limit($subTaskString, 100)) }}
                                <a href="{{ route("project.usershow", $task->id) }}">see available Tasks</a>
                            </p>

                        </a>
                    </div> <!-- end card-->
                </div> <!-- end col-->
            @endforeach

        </div>
    </div>
@endsection
