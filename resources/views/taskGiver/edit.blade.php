@extends('layouts.base')

@section('content')
    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="container">
        <div class="row">
            <div class="col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">

                        <h1 class="header-title h1 mb-3">Settings</h1>

                        <ul class="nav nav-tabs nav-bordered mb-3">
                            <li class="nav-item">
                                <a href="#home-b1" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                    <i class="mdi mdi-home-variant d-lg-none d-block mr-1"></i>
                                    <span class="d-none d-lg-block">Profile</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#profile-b1" data-toggle="tab" aria-expanded="true" class="nav-link">
                                    <i class="mdi mdi-account-circle d-lg-none d-block mr-1"></i>
                                    <span class="d-none d-lg-block">Notifications</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#settings-b1" data-toggle="tab" aria-expanded="false" class="nav-link">
                                    <i class="mdi mdi-settings-outline d-lg-none d-block mr-1"></i>
                                    <span class="d-none d-lg-block">Privacy</span>
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active" id="home-b1">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <span class="m-2">
                                                    <img src="{{ asset('images/basic.jpg') }}" style="height: 100px;" alt="{{$user->name}}" class="img-thumbnail">
                                                </span>

                                                <div class="media-body mt-3">

                                                    <h4 class="mt-1 mb-1 h3 text-capitalise">{{$user->name}}</h4>
                                                    <p class="text-capitalize font-13">{!!($user->title ? $user->title : 'Update your Title')!!}</p>

                                                    <ul class="mb-2 list-inline">
                                                        <li class="list-inline-item mr-3">
                                                            <p class="mb-0 h4">Total Revenue</p>
                                                            <p class="mb-1">{!!($user->revenue ? "#" . $user->revenue : 'You\'ve not earned anything yet <a href="#"></br>Start Earning </a>')!!}</p>
                                                        </li>
                                                    </ul>

                                                    <ul class="mb-2 list-inline">
                                                        <li class="list-inline-item">
                                                            <p class="mb-0 h4">Number of Tasks Completed</p>
                                                            <p>{{($user->orders_in ? $user->oders_in : "0")}}</p>

                                                        </li>
                                                    </ul>

                                                    <ul class="mb-2 list-inline">
                                                        <li class="list-inline-item">
                                                            <p class="mb-0 h4">Number of Tasks  </p>
                                                            <p>{{($user->orders_in ? $user->oders_in : "0")}}</p>

                                                        </li>
                                                    </ul>

                                                    {!! Form::open(['action' => ['AccountController@update', $user->id], "method" => "PATCH"]) !!}
                                                        {!! Form::file('imageurl', []) !!}
                                                        <button type="submit" class="btn btn-outline-primary my-2">Upload New Avatar</button>
                                                    {!! Form::close() !!}


                                                    <button type="button" class="btn btn-outline-danger">Remove current Avatar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-1"></div>

                                    <div class="col-md-7">

                                        <div class="card">

                                            <div class="card-header lead">Basic Info</div>

                                            <div class="card-body">
                                                {!! Form::model($user, ['method' => 'PATCH', 'action' => ['AccountController@update', $user->id]]) !!}

                                                    <div class="form-group row">

                                                        <div class="col-md-6">
                                                            {!! Form::label('name', 'Name', []) !!}
                                                            {!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required', 'autocomplete' => 'name']) !!}
                                                            @error('name')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>

                                                        <div class="col-md-6">
                                                            {!! Form::label('email', 'Email', ['class' =>'']) !!}
                                                            {!! Form::text('email', null, ['class' => 'form-control', 'required' => 'required', 'autocomplete' => 'email']) !!}
                                                            @error('email')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">

                                                        <div class="col-md-12">
                                                           {!! Form::label('title', 'Title', ['class' => 'h5']) !!}
                                                           {!! Form::textarea('title', null, ['class' => 'form-control', 'required' => 'required', 'rows' => 1, 'placeholder' => 'A small description of what you can do']) !!}
                                                        </div>
                                                    </div>

                                                    <hr class="mt-4">

                                                    <div class="form-group row">
                                                        <div class="col-md-12">
                                                            {!! Form::label('bio', 'About Me', ['class' => 'h5']) !!}
                                                            {!! Form::textarea('bio', null, ['class' => 'form-control', 'rows' => 3, 'placeholder' => 'Talk about yourself']) !!}
                                                        </div>
                                                    </div>

                                                    <p class="h4 mt-5 text-dark">Your skill set</p>
                                                    {{-- <hr class="2"> --}}

                                                    <select required name="skills[]" class="select2 form-control select2-multiple select2-hidden-accessible" data-toggle="select2" multiple="multiple" data-placeholder="Choose ..." data-select2-id="4" tabindex="-1" aria-hidden="true" required>
                                                        @foreach ($tasks as $task)
                                                            <optgroup label="{{$task->name}}">
                                                                @foreach ($task->subTasks as $subtask)
                                                                    <option {{(in_array($subtask->id, $skill_ids) ? "selected" : "")}} value="{{$subtask->id}}">{{$subtask->name}}</option>
                                                                @endforeach
                                                            </optgroup>
                                                        @endforeach
                                                    </select>

                                                    <p class="h4 mt-5 text-dark">External Links</p>
                                                    <hr class="2">


                                                    <div class="form-group row">
                                                        <div class="col-sm-12 mb-3">
                                                            {!! Form::label('linkedln', 'Linkedln URL(optional):', ['class' => 'text-mutsd']) !!}
                                                            {!! Form::text('linkedln', null, ['class' => 'form-control', 'placeholder' => 'Your linkedln profile url']) !!}
                                                        </div>
                                                    </div>

                                                    <p class="h4 mt-4 text-dark">Security</p>
                                                    <hr class="2">

                                                    <div class="form-group row">
                                                        <div class="col-md-12 mb-3">
                                                            {!! Form::label('password', 'Update Password', []) !!}
                                                            {!! Form::password('password', ['class' => 'form-control']) !!}
                                                        </div>
                                                    </div>



                                                    <div class="form-group row mb-0">
                                                        <div class="col-md-6 offset-md-4">
                                                            <button type="submit" class="btn btn-primary">
                                                                {{ __('Update Account') }}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane show" id="profile-b1">
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                <p class="mb-0">Leggings occaecat dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            </div>
                            <div class="tab-pane" id="settings-b1">
                                <p>Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                <p class="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                            </div>
                        </div>

                    </div> <!-- end card-body-->
                </div>
            </div>
        </div>
    </div>
@endsection
