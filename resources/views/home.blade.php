@extends('layouts.base')

@section('content')
    <div id="full_width_container">
        <div class="jumbotron jumbotron-fluid bg-secondary text-white">
          <div class="container">
            <h1 class="display-5">Hire Task Manager.</h1>
            <h1 class="display-6">Be more productive.</h1>
            <p class="lead">Let our qualified task manager handle your tasks. Hire talent nearby or worldwide.</p>
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
