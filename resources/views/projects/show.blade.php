@extends('layouts.base')

@section('content')

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

                    <div class="d-none" id="#tpl" class=" mb-3">
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
                                     <div class="col-auto">
                                        <a href="#" class="btn btn-link btn-lg text-muted" data-dz-errormessage>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

@endsection
@section('scripts')


    <script src="{{ asset('js/dropzone.js') }}"></script>

    <script>
        var dropzone = new Dropzone('#myAwesomeDropzone', {
        previewTemplate: document.querySelector('#tpl').innerHTML,
        parallelUploads: 1,
        thumbnailHeight: 120,
        thumbnailWidth: 120,
        maxFilesize: 1, //1mb
        maxFiles: 3,
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
            setTimeout(function () { file.previewElement.classList.add("dz-image-preview"); }, 1);
            }
        }

        });


        var project_id = {{$project->id}};

        function download() {
            $('.photosattached').each(function(photo) {
                $(this).click();
            })
        }

        function updateTask(target, field) {
            $('#fredTaskSelectionModalButton').text($('#task_id :selected').text());
            updateProject(target, field);
            return $("#fredCategoryModal, #fredSubCategoryModal").modal('toggle');
        }

        function updateTaskDuration(target, field) {
            $('#fredTaskDurationModalButton').text($('#duration :selected').text());
            updateProject(target, field);
            return $("#fredTaskDurationModal").modal('toggle');
        }

        function updateTaskStartDate(target, field) {
            $('#fredDateModalButton').text($('#start_date').val());
            updateProject(target, field);
            return $("#fredDateModal").modal('toggle');
        }

         function updateTaskMasterNumber(target, field) {
            $('#frednumberButton').text($('#num_of_taskMaster :selected').text());
            updateProject(target, field);
            return $("#frednumber").modal('toggle');
        }

        function updateSubtask(target, field) {
            $('#fredSubTaskSelectionModalButton').text($('#sub_task_id :selected').text());
            updateProject(target, field);
            return $("#fredSubCategoryModal").modal('toggle');
        }

        function updateProject(target, field) {
            let value = $(target).val();
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                method: 'PUT',
                url: '/projects/' + project_id,
                data: {value:value, field:field},
                success: function(response){
                    if (field == "task_id") {
                        $('#sub_task_id').html('');
                        $('#sub_task_id').append('<option value="0">Make sub task</option>')
                        for (var i = response.length - 1; i >= 0; i--) {
                            $('#sub_task_id').append('<option value="'+ response[i].id +'">' + response[i].name +'</option>')
                        }
                    }
                    return;
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    return $(target).val('Select Task');
                }
            });
        }
    </script>


@endsection
