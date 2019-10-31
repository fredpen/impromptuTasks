@extends('layouts.base')

@section('content')
    <div style="height: 70vh" class="row align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h4 class="card-header">Congratulations</h4>
                <div class="card-body">
                    <h5 class="card-title">You have successfully accepted the task assigned to you, One of our agents will contact you shortly</h5>
                    <ul class="list-unstyled">

                    {{-- <p class="card-text">If you believe this is a mistake, Send a mail to us at support&#64;improptutasks.com </p> --}}
                    <a href="{{ route('home') }}" class="btn btn-primary">Home</a>
                </div>
            </div>
        </div>
    </div>
@endsection


