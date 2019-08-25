<div class="tab-pane" id="basictab4">
    <div class="row">

        {{-- supporting documents --}}
        @if ($project->photos->count() > 0)
            <div class="card widget-flat col-md-12 mb-2">
                <div class="card-body mb-3 pb-0 px-0" style="position: relative;">
                    <h5 onclick="download()" id="attachedButton" class="text-muted">{{$project->photos->count()}} Attached Document(s) click here to downlad</h5>
                    <div class="card mt-1 mb-0 shadow-none border">
                        <div class="p-2">
                            <div class="row align-items-center">
                                @foreach ($project->photos as $photo)
                                    <div class="col-auto">
                                        <a class="photosattached" href="{{asset('images/'.$photo->url)}}" download>Download</a>
                                        <img style="cursor:pointer" src="{{asset('images/'.$photo->url)}} " class="avatar-sm rounded bg-light" alt="">
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endif

        <div class="card widget-flat col-sm-12">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12">

                    <p class="d-block mt-0 h4 "> Attach supporting Documents (optional) limit of 3 files</p>
                    {!! Form::open(['method' => 'POST', 'action' => 'ProjectphotoController@store', 'class' => 'dropzone', 'data-plugin' => 'dropzone', 'data-previews-container' => '#file-previews', 'data-upload-preview-template' => '#uploadPreviewTemplate', 'id' => 'myAwesomeDropzone', 'files' => true]) !!}

                        <div class="fallback"><input name="file" type="file" multiple /> </div>
                        {!! Form::hidden('project_id', $project->id,) !!}
                        <div class="dz-message needsclick">
                            <i class="h1 text-muted dripicons-cloud-upload"></i>
                            <h3>Drop files here or click to upload.</h3>
                        </div>
                    {!! Form::close() !!}

                    <!-- Preview -->
                    <div class="dropzone-previews mt-3" id="file-previews"></div>

                    <div class="d-none" id="uploadPreviewTemplate" class=" mb-3">
                        <div class="card mt-1 mb-0 shadow-none border">
                            <div class="p-2">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <img data-dz-thumbnail class="avatar-sm rounded bg-light" alt="">
                                    </div>
                                    <div class="pl-0 d-none d-md-block">
                                        <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
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
                </div>
            </div>
        </div>
    </div>
</div>
