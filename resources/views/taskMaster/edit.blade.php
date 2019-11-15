@extends('layouts.base')

@section('content')
    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    @if (session('message'))
        @include('partials.notifs')
    @endif

    {{-- errorBag --}}
    <div id="postingModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-dialog">
            <div class="jq-toast-single jq-icon-danger d-flex" role="alert">
                <i class="mr-2 mdi mdi-heart-broken-outline" style="font-size: 30px"></i>
                <span style="right: 0" class="close close-jq-toast-single" data-dismiss="modal" aria-hidden="true">×</span>
                <div id="postErrMess"></div>
            </div>
        </div>
    </div>

   <div class="container">
        <div class="row mt-3">
            
            <div class="col-sm-12">
                <!-- Profile -->
                <div class="card bg-primary">
                    <div class="card-body profile-user-box">

                        <div class="row">
                            <div class="col-sm-8">
                                <div class="media">
                                    <span class="float-left m-2 mr-4"><img src="{{ $user->imageurl ? asset('images/'.$user->imageurl)  : asset('images/basic.jpg') }}" style="height: 100px;" alt="" class="img-thumbnail"></span>
                                    <div class="media-body">

                                        <h4 class="mt-1 mb-1 text-white">{{ ucwords($user->name) }}</h4>
                                        <p class="font-13 text-white-50">{{ $user->email }} </p>

                                        <ul class="mb-0 list-inline text-light">
                                            <li class="list-inline-item mr-3">
                                                <h5 class="mb-1">Registered:</h5>
                                                <p class="mb-0 font-13 text-white-50"> {{ $user->created_at->diffForHumans() }}</p>
                                            </li>
                                            <li class="list-inline-item">
                                                <h5 class="mb-1">Updated:</h5>
                                                <p class="mb-0 font-13 text-white-50"> {{ $user->updated_at->diffForHumans() }}</p>
                                            </li>
                                        </ul>
                                    </div> <!-- end media-body-->
                                </div>
                            </div> <!-- end col-->

                            <div class="col-sm-4">
                                <div class="text-center mt-sm-0 mt-3 text-sm-right">
                                    <a href="{{ route('account.show', $user->id) }}" class="btn btn-light">
                                        <i class="mdi mdi-account-edit mr-1"></i> Show Profile
                                    </a>
                                </div>
                            </div> <!-- end col-->
                        </div> <!-- end row -->

                    </div> <!-- end card-body/ profile-user-box-->
                </div><!--end profile/ card -->
            </div> <!-- end col-->
        </div>


        <div class="row">
            <div class="col-md-5">
                <!-- Personal-Information -->
                {!! Form::model($user, ['method' => 'PUT', 'action' => ['AccountController@update', $user->id], 'id' => 'updateForm']) !!}

                <div class="card">
                    <div class="card-body">
                        <p class="text-muted"><strong><i class="text-danger">*</i> Title :</strong>
                            <input  name="title" type="text" class="form-control" value="{{ ucwords($user->title) }}" maxlength="30" data-toggle="maxlength" data-threshold="30" autocomplete="off" id="title" placeholder="A Seasoned Graphics Designer">
                        </p>

                        <p class="text-muted"><strong><i class="text-danger">*</i> Full Name :</strong>
                            <input type="text" class="form-control" value="{{ ucwords($user->name) }}" maxlength="30" name="name" data-toggle="maxlength" data-threshold="30" autocomplete="off" id="name" placeholder="Ola Eze Ahmed" required>
                        </p>

                        <p class="text-muted"><strong><i class="text-danger">*</i> Country :</strong>
                            <select onchange="fetchRegions(this)" id="country_id" name="country_id" class="h5 mt-0 form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                                @foreach ($countries as $country)
                                    <option {{$user->country_id ? ($user->country_id == $country->id ? "selected" : "") : ""}} value="{{$country->id}}"> {{$country->name}} </option>
                                @endforeach
                            </select>
                        </p>

                        <p class="text-muted"><strong><i class="text-danger">*</i> Region/State :</strong>
                            <select onchange="fetchCities(this)" id="region_id" name="region_id" class="h5 mt-0 form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                                <option value="{{ $user->region_id ? $user->region_id : 0}}"> {{$user->region_id ? $user->region->name  : "Select Country first" }}</option>
                            </select>
                        </p>
        
                        <p class="text-muted"><strong><i class="text-danger">*</i> Region/State :</strong>
                            <select id="city_id" name="city_id" class="h5 mt-0 form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                                <option value=" {{ $user->region_id ? $user->region_id : 0 }} ">{{$user->city_id ? $user->city->name  : "Select Country first" }}</option>
                            </select>
                        </p>

                        <hr>

                        <p class="text-muted"><strong><i class="text-danger">*</i> Profle Description :</strong>
                            <textarea id="bio" name="bio" data-toggle="maxlength" placeholder="Use this space to describe how awesome you are at what you do " class="mb-3 form-control" data-threshold="400" maxlength="400" rows="5" placeholder="No 10, Kano Steet, Waec">{{$user->bio}}</textarea>
                        </p>

                        <div class="text-left">
                             <p class="text-muted"><strong>linkedln :</strong>
                                <input type="text" class="form-control" value="{{ $user->linkedln }}" maxlength="12" name="linkedln"  data-toggle="maxlength" data-threshold="12" autocomplete="off" id="name" placeholder="Your linkedln url">
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Personal-Information -->

                <div class="card text-white bg-info overflow-hidden">
                    <div class="card-body">
                        <div class="toll-free-box text-center">
                            <h6> <i class="mdi mdi-deskphone"></i> Enquiry : {{ env('SUPPORT_EMAIL') }}</h6>
                        </div>
                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col-->

            <div class="col-md-7">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <span class="h6"><i class="text-danger">*</i> Select your area of mastery</span>
                                <select id="skills" required name="skills[]" class="select2 form-control select2-multiple select2-hidden-accessible" data-toggle="select2" multiple="multiple" data-placeholder="Choose ..." data-select2-id="4" tabindex="-1" aria-hidden="true" required>
                                    @foreach ($tasks as $task)
                                        <optgroup label="{{ strtoupper($task->name) }}">
                                            @foreach ($task->subTasks as $subtask)
                                                <option {{(in_array($subtask->id, $skill_ids) ? "selected" : "")}} value="{{$subtask->id}}">{{ ucwords($subtask->name) }}</option>
                                            @endforeach
                                        </optgroup>
                                    @endforeach
                                </select>
                                <span class="h6 text-info">* Select at least a skill, only select the skill you have experiene workng in</span>
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div>

                    <div class="col-sm-12">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <span class="h6"><i class="text-danger">*</i> Select jobs you are interested in</span>
                                <select id="jobs" required name="jobs[]" class="select2 form-control select2-multiple select2-hidden-accessible" data-toggle="select2" multiple="multiple" data-placeholder="Choose ..." data-select2-id="5" tabindex="-1" aria-hidden="true" required>
                                    @foreach ($tasks as $task)
                                        <option {{ (in_array($task->id, $jobsId) ? 'selected' : '' )}} value="{{ $task->id}}">{{ ucwords($task->name)}} </option>
                                    @endforeach
                                </select>
                                <span class="h6 text-info">* Select at least a service that you would like to be considered for</span>
                            </div> 
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <h6 class="text-muted text-uppercase mt-0"><i class="text-danger">*</i> Address</h6>
                                <input type="text" class="form-control" value="{{ $user->address }}" maxlength="12" name="address" data-toggle="maxlength" data-threshold="12" autocomplete="off" id="address"  placeholder="No 74, Adebola Street">
                                <span class="h6 text-info">* Do not put City, Region or Country here. Example: No 74, Kano Street</span>
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div><!-- end col -->

                   
                    {!! Form::close() !!}


                    <div class="col-sm-12">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <h6 class="text-muted text-uppercase mt-0">Profile Picture</h6>
                                    {!! Form::open(['method' => 'POST', 'action' => 'ProjectphotoController@store', 'class' => 'dropzone', 'data-plugin' => 'dropzone', 'data-previews-container' => '#file-previews', 'data-upload-preview-template' => '#uploadPreviewTemplate', 'id' => 'myAwesomeDropzone', 'files' => true, 'style' => 'min-height:120px']) !!}

                                        <div class="fallback"><input name="file" type="file"/> </div>
                                        {!! Form::hidden('profilePicture', $user->id) !!}
                                        <div class="dz-message needsclick">
                                            <span>Drop profile picture here or click to upload.</span>
                                        </div>
                                    {!! Form::close() !!}
                                    <span class="h6 text-info"><i class="text-danger">*</i> Task Master with profle picture foster a sense of trust and thereby get more tasks
                                    <br> Uploaded pictures will take effect on page reload
                                    </span>
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div><!-- end col -->

                    <div class="col-sm-6 mt-3 mb-2">
                        <button onclick="checkRequiredFields()" type="submit" class="d-block mx-auto btn-lg btn btn-primary">  {{ __('Update Profile') }} </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection



@section('scripts')
<script src="{{ asset('js/dropzone.js') }}"></script>
<script>
    var role_id = {{$user->role_id}};

    Dropzone.autoDiscover = false;
    var dropzone = new Dropzone('#myAwesomeDropzone', {
        parallelUploads: 1,
        thumbnailHeight: 120,
        thumbnailWidth: 120,
        maxFilesize: 1, //1mb
        maxFiles: 1,
        filesizeBase: 1000,
        thumbnail: function (file, dataUrl) {
            if (file.previewElement) {
                file.previewElement.classList.remove("dz-file-preview");
                var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                for (var i = 0; i < images.length; i++) {
                    var thumbnailElement = images[i];
                    thumbnailElement.alt = file.name;
                    thumbnailElement.src = dataUrl;
                }
                setTimeout(function () {file.previewElement.classList.add("dz-image-preview"); }, 1);
            }
        }
    });

</script>
@endsection
