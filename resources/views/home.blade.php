@extends('layouts.base')

@section('content')
    <div id="full_width_container">
        <div class="jumbotron jumbotron-fluid bg-secondary text-white p-3">
          <div class="container">
               <h1 class="display-5">Hire Task Master.</h1>
                <h1 class="display-6">Be more productive.</h1>
                <p class="lead">Let our qualified task manager handle your tasks. Hire talent nearby or worldwide.</p>
            @guest
                <a class="btn btn-lg btn-primary m-2" href="{{ route('register') }}">Hire Task Master</a>
                <a class="btn btn-lg btn-primary m-2" href="{{ route('register') }}">Become a Task Master</a>
            @else
                @if (Auth::id() == 1)
                    <a class="btn btn-lg btn-primary" href="{{ route('register') }}">Hire Freelancer</a>
                @else
                    <a class="btn btn-lg btn-primary" href="{{ route('register') }}">Apply to Tasks</a>
                @endif
            @endguest

          </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Dashboard</div>

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
        </div>
    </div>
@endsection
