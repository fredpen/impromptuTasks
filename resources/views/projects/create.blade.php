@extends('layouts.base')

@section('content')
<div class="container">

    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="row justify-content-center align-items-center">
        <div class="col-md-8 col-lg-8">
            <div class="card-body">
                {!! Form::open(['method' => 'POST', 'action' => 'ProjectController@store', 'files'=>true]) !!}
                    <div id="basicwizard">

                        <ul class="nav nav-pills nav-justified form-wizard-header mb-4">

                            <li class="nav-item">
                                <a href="#basictab1" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
                                    <i class="mdi mdi-account-circle mr-1"></i>
                                    <span class="d-none d-sm-inline">Basics</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#basictab2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                    <i class="mdi mdi-face-profile mr-1"></i>
                                    <span class="d-none d-sm-inline">Project Details</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#basictab3" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                    <i class="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                                    <span class="d-none d-sm-inline">Timeline</span>
                                </a>
                            </li>
                             <li class="nav-item">
                                <a href="#basictab4" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                    <i class="mdi mdi-account-circle mr-1"></i>
                                    <span class="d-none d-sm-inline">new</span>
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
                            <div class="tab-pane active mb-3" id="basictab1">
                                <div class="row">
                                    <div class="col-md-12 mb-3 d-flex space-around">
                                        {!! Form::label('model', 'Job Model', ['class' => 'align-self-center col-sm-4 text-primary']) !!}
                                        <div class="custom-control custom-radio mr-3 col-sm-2">
                                            <input type="radio" id="remote" name="model" class="custom-control-input" value="remote">
                                            <label class="custom-control-label" for="remote">Remote</label>
                                        </div>
                                        <div class="custom-control custom-radio col-sm-2">
                                            <input type="radio" id="onsite" name="model" class="custom-control-input" value="onsite">
                                            <label class="custom-control-label" for="onsite">OnSite</label>
                                        </div>
                                    </div>

                                    <div class="col-12 mb-3 d-flex">
                                        {!! Form::label('task_id', 'Task', ['class' => 'align-self-center col-sm-4 text-primary']) !!}
                                        {!! Form::select("task_id", $tasks, null, ['class' =>  'form-control select2 select2-hidden-accessible form-control', 'data-toggle' => 'select2', 'onchange' => 'fetch_subtasks(this)', 'placeholder' => 'What do you want to get done ']) !!}
                                    </div>

                                    <div class="col-12 mb-3 d-flex">
                                        {!! Form::label('duration', 'Task duration', ['class' => 'align-self-center col-sm-4 text-primary']) !!}
                                        {!! Form::select("duration", $duration, null, ['class' => 'text-uppercase form-control select2 select2-hidden-accessible form-control', 'data-toggle' => 'select2']) !!}
                                    </div>

                                    <div class="col-12 mb-3 d-flex">
                                        {!! Form::label('start_date', 'Proposed start date', ['class' => 'align-self-center col-sm-4 text-primary']) !!}
                                        {!! Form::text('start_date', date('m-d-Y', time()), ['class' => 'form-control', 'data-provide' => 'datepicker', 'data-date-autoclose' => 'true']) !!}
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane" id="basictab2">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="col-12 mb-3">

                                            {!! Form::label('sub_task_id', 'Tasks (let\'s get specific)', ['id'=> 'sub_task_id_label', 'class' => 'text-primary']) !!}
                                            <select id="sub_task_id" name="sub_task_id" class="form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                                                <option value="">select a task in the first tab to see sub-tasks </option>
                                            </select>
                                        </div>

                                        <div class="col-12 mb-3">
                                           <div class="form-group mb-3">
                                                <label for="example-textarea" class="text-primary">Describe Your Task</label>
                                                <textarea name="description" class="form-control" id="example-textarea" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="tab-pane" id="basictab3">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group mb-3">
                                            <div class="input-group mt-3">
                                                {!! Form::label('attachment', 'Attach supporting documents if available *pdf,docx,png', ['class'=> 'mr-3 text-primary']) !!}
                                                {!! Form::file('attachment', []) !!}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row m-3">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">  {{ __('Create Project') }} </button>
                                    </div>
                                </div>
                            </div>

                             <div class="tab-pane" id="basictab4">
                                <div class="row">
                                    <div class="col-12">
                                        Basic tab 4
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane" id="basictab5">
                                <div class="row">
                                    <div class="col-12">
                                        Basic tab 5
                                    </div>
                                </div>
                            </div>

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
                </form>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        function fetch_subtasks(target)
        {
            let task_id = $(target).val();
            let task_name = $(target).children('option:selected').text();
            $("#sub_task_id_label").text('What kind of ' + task_name + ' do you want to get done?');
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                method: 'GET',
                url: '/admin/subtasks',
                data: {task_id:task_id},
                success: function(response){
                    $("#sub_task_id").parent().removeClass('d-none');
                     $('#sub_task_id').html('');
                    if (response.length > 1) {
                        for (var i = response.length - 1; i >= 0; i--) {
                            $('#sub_task_id').append('<option value="'+ response[i].id +'">' + response[i].name +'</option>')
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(JSON.stringify(jqXHR));
                    console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
                }
            });
        }
    </script>
    <script src="{{ asset('js/form.js') }}"></script>
@endsection
