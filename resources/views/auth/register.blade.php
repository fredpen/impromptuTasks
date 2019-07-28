@extends('layouts.base')

@section('content')
<div class="container">

    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="row justify-content-center align-items-center" style="height: 70vh">
        <div class="col-md-8">

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

            {{-- <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <div class="col-md-12 col-lg-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Full Name">

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="col-md-12 col-lg-6">

                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email Address">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6">
                                <select name="role_id" class="custom-select mt-3">
                                    <option value="1">Task Giver</option>
                                    <option value="2">Task Master</option>
                                    <option value="3">I want to post and do tasks</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12 col-lg-6">
                                {{-- <label for="password" class="col-form-label">{{ __('Password') }}</label> --}}
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="col-md-12 col-lg-6">
                                <input placeholder="Confirm Password" id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>




                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> --}}
        </div>
    </div>
</div>



@endsection
