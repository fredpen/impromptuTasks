@extends('layouts.base')

@section('content')
    <div style="height: 70vh" class="row align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h6 class="card-header">Unauthorised</h6>
                <div class="card-body">
                    <h5 class="card-title">Your account is currently not active</h5>
                    <ul class="list-unstyled">
                        <li>This is happening because of one of the following
                            <ul>
                                <li>You just finished registration and we have not verified your credentials</li>
                                <li>You don't have enough access to view the requested page</li>
                                <li>You violate the <a href="#">Rules and Regulation </a>of impromptuTasks</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="card-text">Send a mail to support&#64;improptutasks.com for more</p>
                    <a href="{{ route('home') }}" class="btn btn-primary">Home</a>
                </div>
            </div>
        </div>
    </div>
@endsection


