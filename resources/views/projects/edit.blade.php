@extends('layouts.base')

@section('content')
<div class="container">

    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="row justify-content-center align-items-center">
        <div class="col-md-12 mt-2">
            <div id="basicwizard">

                <ul class="nav nav-pills nav-justified form-wizard-header mb-4">

                    <li class="nav-item">
                        <a href="#basictab1" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
                            <i class="mdi mdi-fountain-pen"></i>
                            <span class="d-none d-sm-inline">Basics</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#basictab2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                            <i class="mdi mdi-account-star-outline"></i>
                            <span class="d-none d-sm-inline">Description</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#basictab3" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                            <i class="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                            <span class="d-none d-sm-inline">Timeline </span>

                        </a>
                    </li>
                        <li class="nav-item">
                        <a href="#basictab4" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                            <i class="mdi mdi-account-circle mr-1"></i>
                            <span class="d-none d-sm-inline">Attachements</span>
                        </a>
                    </li>
                        <li class="nav-item">
                        <a href="#basictab5" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                            <i class="mdi mdi-account-circle mr-1"></i>
                            <span class="d-none d-sm-inline">new4</span>
                        </a>
                    </li>
                </ul>

                <div class="tab-content b-0 mb-0">
                    @include('projects.partials.tab1')

                    @include('projects.partials.tab2')

                    @include('projects.partials.tab3')

                    @include('projects.partials.tab4')

                    @include('projects.partials.tab5')

                    <ul class="list-inline wizard mb-0">
                        <li class="previous list-inline-item disabled">
                            <a href="#" class="btn btn-info" title="previous"><i class="dripicons-arrow-thin-left"></i></a>
                        </li>
                        <li class="next list-inline-item float-right">
                            <a href="#" class="btn btn-info"><i class="dripicons-arrow-thin-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')

    <script>
        var project_id = {{$project->id}};

        $(document).ready(function () {
        })

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

    <script src="{{ asset('js/form.js') }}"></script>
    <script src="{{ asset('js/dropzone.min.js') }}"></script>
@endsection
