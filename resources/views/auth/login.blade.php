@extends('layouts.base')

@section('content')







<div class="container">
    <div class="row row align-items-center justify-content-center" style="height:70vh;">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">

                    <h4 class="header-title mb-3"> Basic Wizard</h4>

                    <form>
                        <div id="basicwizard">

                            <ul class="nav nav-pills nav-justified form-wizard-header mb-4">
                                <li class="nav-item">
                                    <a href="#basictab1" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active"> 
                                        <i class="mdi mdi-account-circle mr-1"></i>
                                        <span class="d-none d-sm-inline">Account</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#basictab2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                        <i class="mdi mdi-face-profile mr-1"></i>
                                        <span class="d-none d-sm-inline">Profile</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#basictab3" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                        <i class="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                                        <span class="d-none d-sm-inline">Finish</span>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content b-0 mb-0">
                                <div class="tab-pane active" id="basictab1">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="userName">User name</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" id="userName" name="userName" value="hyper">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="password"> Password</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="password" name="password" class="form-control" value="123456789">
                                                </div>
                                            </div>
                                            
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="confirm">Re Password</label>
                                                <div class="col-md-9">
                                                    <input type="password" id="confirm" name="confirm" class="form-control" value="123456789">
                                                </div>
                                            </div>
                                        </div> <!-- end col -->
                                    </div> <!-- end row -->
                                </div>

                                <div class="tab-pane" id="basictab2">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="name"> First name</label>
                                                <div class="col-md-9">
                                                    <input type="text" id="name" name="name" class="form-control" value="Francis">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="surname"> Last name</label>
                                                <div class="col-md-9">
                                                    <input type="text" id="surname" name="surname" class="form-control" value="Brinkman">
                                                </div>
                                            </div>
                    
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="email">Email</label>
                                                <div class="col-md-9">
                                                    <input type="email" id="email" name="email" class="form-control" value="cory1979@hotmail.com">
                                                </div>
                                            </div>
                                        </div> <!-- end col -->
                                    </div> <!-- end row -->
                                </div>

                                <div class="tab-pane" id="basictab3">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="text-center">
                                                <h2 class="mt-0"><i class="mdi mdi-check-all"></i></h2>
                                                <h3 class="mt-0">Thank you !</h3>

                                                <p class="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                    mattis dictum aliquet.</p>

                                                <div class="mb-3">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                        <label class="custom-control-label" for="customCheck1">I agree with the Terms and Conditions</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> <!-- end col -->
                                    </div> <!-- end row -->
                                </div>

                                <ul class="list-inline wizard mb-0">
                                    <li class="previous list-inline-item disabled">
                                        <a href="#" class="btn btn-info">Previous</a>
                                    </li>
                                    <li class="next list-inline-item float-right">
                                        <a href="#" class="btn btn-info">Next</a>
                                    </li>
                                </ul>

                            </div> <!-- tab-content -->
                        </div> <!-- end #basicwizard-->
                    </form>

                </div> <!-- end card-body -->
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
