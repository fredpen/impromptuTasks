@extends('layouts.base')

@section('content')
    <div style="height: 70vh" class="row align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h6 class="card-header">Unauthorised</h6>
                <div class="card-body">
                    <h5 class="mb-3 card-title">You need to complete your registration before you can Post or apply for Tasks</h5>
                    <a href="{{ route('account.edit', Auth::User()->id )}}" class="btn btn-primary">Complete my profile</a>
                </div>
            </div>
        </div>
    </div>
@endsection


