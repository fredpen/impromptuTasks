@extends('layouts.base')

@section('content')
<div class="container">

    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="row justify-content-center align-items-center my-4">
        <div class="col-lg-7">

            <div class="card">
                <div class="card-body">

                    <h2 class="mt-2 mb-2 text-center text-primary">Sign me up</h2>
                    <hr class="mb-3">

                   <form method="POST" action="{{ route('register') }}">
                        @csrf

                        {{-- names and email--}}
                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <div class="form-group">
                                    <label for="name">Full Name</label>
                                    <input required id="name" type="text" class="form-control  @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Full Name">

                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-6 mb-2">
                                <label for="email">Email</label>
                                <input required id="email" type="email" class="form-control  @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email ">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>


                        {{-- password and phone --}}
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6 mb-2">
                                    <label for="phone_number">Phone Number</label>
                                    <input required type="number" name="phone_number" class="form-control @error('phone_number') is-invalid @enderror" name="phone_number" value="{{ old('phone_number') }}" required autocomplete="email" placeholder="phone">

                                    @error('phone_number')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>

                                <div class="col-md-6 mb-2">
                                    <label for="password">Password</label>
                                    <input required id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="password">

                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 my-3 d-flex space-around flex-wrap pl-0">
                            {!! Form::label('role_id', 'I want to', ['class' => 'col-sm-12 pl-0 mb-2']) !!}
                            <div class="custom-control custom-radio mr-3">
                                <input type="radio" name="role_id" class="custom-control-input" value="1" id="taskGiver">
                                <label class="custom-control-label" for="taskGiver">Hire for a Task</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" name="role_id" class="custom-control-input" value="2" id="taskMaster">
                                <label class="custom-control-label" for="taskMaster">Apply as a Task Master</label>
                            </div>
                        </div>

                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" name="agreementBox" class="custom-control-input" id="agreementBox">
                            <label class="custom-control-label" for="customCheck1">Yes, I understand and agree to the <a href="#">ImpromptuTasks Terms of service</a> and <a href="#">Privacy policy</a> </label>
                        </div>

                        <button type="submit" class="my-4 btn btn-lg btn-primary mx-auto d-block">Create my Account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
@endsection
