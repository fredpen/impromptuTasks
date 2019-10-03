@extends('layouts.base')

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
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-header">{{ $task->name}}</div>

                        <div class="card-body">
                            @if (session('status'))
                                <div class="alert alert-success" role="alert">
                                    {{ session('status') }}
                                </div>
                            @endif

                            You are logged in!
                        </div>
                    </div>
            </div>
            @endforeach

        </div>
    </div>
@endsection
