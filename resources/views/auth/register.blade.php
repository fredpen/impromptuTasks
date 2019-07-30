@extends('layouts.base')

@section('content')
<div class="container">

    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="row justify-content-center align-items-center my-4">
        <div class="col-lg-8">
            <div class="card widget-flat bg-primary text-white">
                <div class="card-body">
                    <h3 class="my-0 text-white">Sign up in 3 easy steps</h3>
                </div>
            </div>

            <div class="card">
                <div class="card-body pt-0">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div id="progressbarwizard">
                            <ul class="nav nav-pills nav-justified form-wizard-header mb-3">
                                <li class="nav-item">
                                    <a href="#account-2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                        <i class="mdi mdi-account-circle mr-1"></i>
                                        <span class="d-none d-sm-inline">Account</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#profile-tab-2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                        <i class="mdi mdi-face-profile mr-1"></i>
                                        <span class="d-none d-sm-inline">Profile</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#finish-2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
                                        <i class="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                                        <span class="d-none d-sm-inline">Finish</span>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content b-0 mb-0">

                                <div id="bar" class="progress mb-3" style="height: 7px;">
                                    <div class="bar progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 100%;"></div>
                                </div>

                                <div class="tab-pane" id="account-2">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="name">Full Name</label>
                                                <div class="col-md-9">
                                                    <input required id="name" type="text" class="form-control  @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Full Name">

                                                    @error('name')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                </div>
                                            </div>

                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="email"> Email</label>
                                                <div class="col-md-9">
                                                    <input required id="email" type="email" class="form-control  @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Email Address">

                                                    @error('email')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                </div>
                                            </div>



                                            <div class="form-group row mb-3">
                                                <label class="col-md-3 col-form-label" for="password">Password</label>
                                                <div class="col-md-9">
                                                    <input required id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="password">

                                                    @error('password')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane" id="profile-tab-2">
                                    <div class="row justify-content-center align-items-center my-4">
                                        <div class="col-12">
                                             <div class="form-group row mb-3">
                                                <label class="col-md-4 col-form-label" for="phone_number">Phone Number</label>
                                                <div class="col-md-8">
                                                    <input required type="number" name="phone_number" class="form-control" value="{{ old('phone_number') }}">
                                                </div>
                                            </div>

                                            <div class="form-group row mb-">
                                                <label class="col-md-4 col-form-label" for="location_id"> Nearest Location</label>
                                                <div class="col-md-8">
                                                    <select required name="location_id" class="form-control custom-select text-capitalize">
                                                        @foreach (( DB::table('locations')->orderBy('name', 'asc')->get(['id', 'name'])) as $location)
                                                            <option  value="{{$location->id}}">{{$location->name}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group row mb-1">
                                                <label class="col-md-4 col-form-label" for="role_id"> What would you like to do</label>
                                                <div class="col-md-8">
                                                    <select required name="role_id" class="custom-select form-control" value="{{ old('role_id') }}">
                                                        @foreach (( DB::table('roles')->get(['id', 'name'])) as $role)
                                                            <option value="{{$role->id}}">{{($role->id === 1 ? "I need to some tasks done" : "I want to apply as a Task Master")}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane active" id="finish-2">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="text-center">
                                                <h2 class="mt-0"><i class="mdi mdi-check-all"></i></h2>
                                                <h3 class="mt-0">Thank you !</h3>
                                                <div class="mb-3">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck3">
                                                        <label class="custom-control-label" for="customCheck3"> I agree with the
                                                            <a href="#"> Terms and Conditions</a>
                                                        </label>
                                                    </div>

                                                    <div class="mb-4 mt-3">
                                                        <button type="submit" class="btn btn-outline-primary">Sign me up  </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul class="list-inline mb-0 wizard">
                                    <li class="previous list-inline-item">
                                        <a href="#" class="btn btn-info">Previous</a>
                                    </li>
                                    <li class="next list-inline-item float-right disabled">
                                        <a href="#" class="btn btn-info">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
      <script src="{{ asset('js/form.js') }}"></script>
@endsection
