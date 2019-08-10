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

                        <h1 class="header-title h1 mb-3">settings </h1>

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
                                                    <h5> {{($user->role_id == 1 ? "Task Giver" : "Task Master")}}</h5>

                                                    <hr class="2">

                                                    <ul class="mb-2 list-inline">
                                                        <li class="list-inline-item">
                                                            <p class="mb-0 h4">Jobs</p>
                                                            <p>{{($user->orders_out ? $user->oders_out : "0")}}</p>

                                                        </li>
                                                    </ul>

                                                    {!! Form::open(['action' => ['AccountController@update', $user->id], "method" => "PATCH", 'id' => 'uploadAvatar']) !!}
                                                        {!! Form::file('imageurl', ['class' => 'mb-3']) !!}
                                                        <button type="button" id="uploadAvatarButton" class="btn btn-outline-primary my-1">Upload New Avatar</button>
                                                    {!! Form::close() !!}


                                                   {!! Form::open(['action' => ['AccountController@update', $user->id], "method" => "PATCH"]) !!}
                                                        <button type="button" class="btn btn-outline-danger my-1">Remove old Avatar</button>
                                                    {!! Form::close() !!}
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

                                                        <div class="col-lg-6 mb-3">
                                                            {!! Form::label('name', 'Name', []) !!}
                                                            {!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required', 'autocomplete' => 'name']) !!}
                                                            @error('name')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>

                                                        <div class="col-lg-6 mb-3">
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
                                                        <div class="col-lg-6 mb-3">
                                                            {!! Form::text('phone_number', null, ['class' => 'form-control', 'required' => 'required', 'placeholder' => 'Phone']) !!}
                                                            @error('phone_number')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>

                                                        <div class="col-lg-6 mb-3">
                                                            {!! Form::select("country_id", $countries, null, ['placeholder' => 'Choose a country', 'class' => 'form-control select2 select2-hidden-accessible form-control', 'data-toggle' => 'select2', 'onchange' => 'fetch_regions(this)']) !!}
                                                            @error('country_id')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>
                                                    </div>


                                                    <div class="form-group row">
                                                        <div class="col-lg-6 mb-3">
                                                            <select onchange="fetch_cities(this)" id="region_id" name="region_id" class="form-control select2 select2-hidden-accessible form-control" data-toggle="select2" placeholder="Choose a region">
                                                                <option value="0">Choose a region</option>
                                                            </select>
                                                             @error('region_id')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>

                                                        <div class="col-lg-6 mb-3">
                                                            <select id="city_id" name="city_id" class="form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                                                                <option value="0">Select Your nearest City</option>
                                                            </select>
                                                             @error('city_id')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <div class="col-md-12">
                                                            {!! Form::label('address', 'Address', ['class' =>'']) !!}
                                                            {!! Form::text('address', null, ['class' => 'form-control', 'required' => 'required']) !!}
                                                            @error('address')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
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

                            {{-- messages pane --}}
                            <div class="tab-pane show justify-content-center" id="profile-b1">
                               <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="dropdown float-right">
                                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Settings</a>
                                                    <!-- item-->
                                                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                </div>
                                            </div>
                                            <h4 class="header-title mb-3">Messages</h4>

                                            <div class="inbox-widget">
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="{{ asset('images/basic.jpg') }}" class="rounded-circle" alt=""></div>
                                                    <p class="inbox-item-author text-primary">Tomaslau</p>
                                                    <p class="inbox-item-text">I've finished it! See you so...</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="{{ asset('images/basic.jpg') }}" class="rounded-circle" alt=""></div>
                                                    <p class="inbox-item-author">Stillnotdavid</p>
                                                    <p class="inbox-item-text">This theme is awesome!</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="{{ asset('images/basic.jpg') }}" class="rounded-circle" alt=""></div>
                                                    <p class="inbox-item-author">Kurafire</p>
                                                    <p class="inbox-item-text">Nice to meet you</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>

                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="{{ asset('images/basic.jpg') }}" class="rounded-circle" alt=""></div>
                                                    <p class="inbox-item-author">Shahedk</p>
                                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                                <div class="inbox-item">
                                                    <div class="inbox-item-img"><img src="{{ asset('images/basic.jpg') }}" class="rounded-circle" alt=""></div>
                                                    <p class="inbox-item-author">Adhamdannaway</p>
                                                    <p class="inbox-item-text">This theme is awesome!</p>
                                                    <p class="inbox-item-date">
                                                        <a href="#" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                                    </p>
                                                </div>
                                            </div> <!-- end inbox-widget -->
                                        </div> <!-- end card-body-->
                                    </div> <!-- end card-->
                                </div>
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
@section('scripts')
    <script>
        function fetch_cities(target)
        {
            let region_id = $(target).val();
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                method: 'GET',
                url: '/cities/',
                data: {region_id:region_id},
                success: function(response){
                    $('#city_id').html('');
                    for (var i = response.length - 1; i >= 0; i--) {
                        $('#city_id').append('<option value="'+ response[i].id +'">' + response[i].name +'</option>')
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(JSON.stringify(jqXHR));
                    console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
                }
            });
        }

        function fetch_regions(target)
        {
            let country_id = $(target).val();
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                method: 'GET',
                url: '/regions/',
                data: {country_id:country_id},
                success: function(response){
                    $('#region_id').html('');
                    for (var i = response.length - 1; i >= 0; i--) {
                        $('#region_id').append('<option value="'+ response[i].id +'">' + response[i].name +'</option>')
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(JSON.stringify(jqXHR));
                    console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
                }
            });
        }
    </script>
@endsection
{{--  --}}
