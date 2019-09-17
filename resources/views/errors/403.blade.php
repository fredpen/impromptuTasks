@extends('layouts.base')

@section('content')
    <div style="height: 70vh" class="row align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h6 class="card-header">Unauthorised</h6>
                <div class="card-body">
                    <h5 class="card-title">Sorry, You are not authorised to see the page requested </h5>
                     <p class="card-text">If you believe this is a mistake, Send a mail to support&#64;improptutasks.com</p>
                    <a href="{{ route('home') }}" class="btn btn-primary">Return back Home</a>
                </div>
            </div>
        </div>
    </div>
@endsection


