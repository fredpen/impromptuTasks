@extends('layouts.base')

@section('content')
    <div style="height: 70vh" class="row align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h4 class="card-header">Unauthorised</h4>
                <div class="card-body">
                    <h5 class="mb-3 card-title">You need to complete your profile before you can perform this task. </h5>
                    <a href="{{ route('account.edit', Auth::User()->id )}}" class="btn btn-primary">Complete my profile</a>
                </div>
            </div>
        </div>
    </div>
@endsection


