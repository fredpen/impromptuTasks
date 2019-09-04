<div class="tab-pane" id="basictab4">
    <div class="row">

        @if ($project->photos->count())
            <div class="card widget-flat col-md-12 mb-2">
                <div class="card-body mb-3 pb-0 px-0" style="position: relative;">
                <h5 class="text-muted">Attached Document{{$project->photos->count() == 1 ? "" : "s"}}</h5>
                    <div class="card mt-1 mb-0 shadow-none">
                        <div class="p-2">
                            <div class="row align-items-center">
                                @foreach ($project->photos as $key => $photo)
                                    <div id="fileParent" class="col-sm-12 d-flex justify-content-between border-bottom">
                                        <span class="h5">
                                            <a href="{{asset('images/'.$photo->url)}}" download>Supporting Document {{$key + 1}}  <i class="mdi mdi-download"></i></a>
                                        </span>

                                        <i onclick="deleteFile(this, {{$photo->id}})" class="mdi mx-2 h4 mdi-delete pointer text-danger"></i>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endif

        <div class="card widget-flat col-sm-12">
            <div class="card-body pb-5 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12">

                    <p class="d-block mt-0 h4 "> Attach supporting Documents (optional)</p>
                    <ul class="text-muted h6 mb-3">
                        <li>You can't upload more than three(3) files</li>
                        <li>Maximum file size is 1MB</li>
                    </ul>
                    {!! Form::open(['method' => 'POST', 'action' => 'ProjectphotoController@store', 'class' => 'dropzone', 'data-plugin' => 'dropzone', 'data-previews-container' => '#file-previews', 'data-upload-preview-template' => '#uploadPreviewTemplate', 'id' => 'myAwesomeDropzone', 'files' => true]) !!}

                        <div class="fallback"><input name="file" type="file" multiple /> </div>
                        {!! Form::hidden('project_id', $project->id,) !!}
                        <div class="dz-message needsclick">
                            <i class="h1 text-muted dripicons-cloud-upload"></i>
                            <h3>Drop files here or click to upload.</h3>
                        </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
</div>


