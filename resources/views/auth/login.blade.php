@extends('layouts.base')

@if ($errors->any())
@include('partials.errorBag')
@endif

@section('content')
<div class="container">
    <div class="row align-items-center justify-content-center mt-2" style="height:70vh;">
        <div class="col-xl-8">
            <div class="card">
                <div class="card-body pt-0">
                   
                        <div id="basicwizard">

                            <ul class="nav nav-pills nav-justified form-wizard-header mb-4">
                                <li class="nav-item">
                                    <a href="#basictab1" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active"> 
                                        <i class="mdi mdi-account-circle mr-1"></i>
                                        <span class="d-none d-sm-inline">Sign in</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#basictab2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                        <i class="mdi mdi-face-profile mr-1"></i>
                                        <span class="d-none d-sm-inline">Register</span>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content b-0 mb-0">
                                <div class="tab-pane active" id="basictab1">
                                    <div class="row">
                                        <div class="col-12">
                                            <form method="POST" action="{{ route('login') }}">
                                                @csrf
                        
                                                <div class="form-group row">
                                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
                        
                                                    <div class="col-md-6">
                                                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                        
                                                        @error('email')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                </div>
                        
                                                <div class="form-group row">
                                                    <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
                        
                                                    <div class="col-md-6">
                                                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                        
                                                        @error('password')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                </div>
                        
                                                <div class="form-group row">
                                                    <div class="col-md-6 offset-md-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        
                                                            <label class="form-check-label" for="remember">
                                                                {{ __('Remember Me') }}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                        
                                                <div class="form-group row mb-0">
                                                    <div class="col-md-8 offset-md-4">
                                                        <button type="submit" class="btn btn-primary">
                                                            {{ __('Login') }}
                                                        </button>
                        
                                                        @if (Route::has('password.request'))
                                                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                                                {{ __('Forgot Your Password?') }}
                                                            </a>
                                                        @endif
                                                    </div>
                                                </div>
                                            </form>
                                        </div> 
                                    </div>
                                </div>

                                <div class="tab-pane" id="basictab2">
                                    <div class="row">
                                        <div class="col-12">
                                            <form method="POST" action="{{ route('register') }}">
                                                @csrf
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
                                                        <input type="radio" required name="role_id" class="custom-control-input" value="1" id="taskGiver">
                                                        <label class="custom-control-label" for="taskGiver">Hire for a Task</label>
                                                    </div>
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio"  required name="role_id" class="custom-control-input" value="2" id="taskMaster">
                                                        <label class="custom-control-label" for="taskMaster">Apply as a Task Master</label>
                                                    </div>
                                                </div>
                        
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" required checked name="agreementBox" class="custom-control-input" id="agreementBox">
                                                    <label class="custom-control-label" for="agreementBox">Yes, I understand and agree to the <a href="#">ImpromptuTasks Terms of service</a> and <a href="#">Privacy policy</a> </label>
                                                </div>
                        
                                                <button type="submit" class="my-4 btn btn-lg btn-primary mx-auto d-block">Create my Account</button>
                                            </form>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div> 
                </div>
            </div> 
        </div>





        {{-- <div class="col-sm-12 col-md-10 col-lg-7">
            <div class="card" style=" border: 1px solid #7e78ea2e;">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> --}}
    </div>
</div>

@endsection
