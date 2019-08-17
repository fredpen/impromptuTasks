@extends('layouts.base')

@section('content')
{!! Form::open(['method' => 'POST', 'action' => 'ProjectController@store']) !!}
      <input name="file" type="file" multiple />
      {!! Form::submit('sub', []) !!}
      {!! Form::close() !!}




    <form action="#" method="post" class="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews"
        data-upload-preview-template="#uploadPreviewTemplate">
        <div class="fallback">
            <input name="file" type="file" multiple />
        </div>

        <div class="dz-message needsclick">
            <i class="h1 text-muted dripicons-cloud-upload"></i>
            <h5>Drop files here or click to upload.</h5>
        </div>
    </form>

    <div class="dropzone-previews mt-3" id="file-previews"></div>


    <div class="d-none" id="uploadPreviewTemplate">
        <div class="card mt-1 mb-0 shadow-none border">
            <div class="p-2">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <img data-dz-thumbnail class="avatar-sm rounded bg-light" alt="">
                    </div>
                    <div class="col pl-0">
                        <a href="javascript:void(0);" class="text-muted font-weight-normal" data-dz-name></a>
                        <p class="mb-0" data-dz-size></p>
                    </div>
                    <div class="col-auto">
                        <a href="#" class="btn btn-link btn-lg text-muted" data-dz-remove>
                            <i class="dripicons-cross"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<form action="ProjectController@store"></form>
@endsection


@section('scripts')
    {{-- <script src="assets/dropzone.min.js"></script> --}}
    <script src="{{ asset('js/dropzone.min.js') }}"></script>
    <script src="{{ asset('js/component.fileupload.js') }}"></script>
@endsection
