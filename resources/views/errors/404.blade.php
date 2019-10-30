@extends('layouts.base')

@section('content')
    <div style="height: 70vh" class="row align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h6 class="card-header">Not found</h6>
                <div class="card-body">
                    <h5 class="card-title">Well this is embarrasing but the page you requeted for does not exit</h5>
                    <ul class="list-unstyled">

                    <p class="card-text">If you believe this is a mistake, Send a mail to us at support&#64;improptutasks.com </p>
                    <a href="{{ route('home') }}" class="btn btn-primary">Home</a>
                </div>
            </div>
        </div>
    </div>
@endsection


