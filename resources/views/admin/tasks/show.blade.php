@extends('layouts.admin')

@section('content')
    <ol class="breadcrumb">
        <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item">Task</li>
        <li class="breadcrumb-item">Sub - tasks</li>
    </ol>

    @include('partials.jumbotron', ['pageTitle' => 'Sub-task'])

    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="row mt-4">
        <div class="col-lg-6">
            <div id="accordion" class="custom-accordion mb-4">
                <div class="card mb-0">
                    <div class="card-header" id="headingOne">
                        <h5 class="m-0">
                            <a class="custom-accordion-title collapsed d-block pt-2 pb-2" data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Create Sub Task<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card card-body col-12 ">
                            <div class="card-text">
                                {!! Form::open(['method' => 'POST', 'action' => 'SubTaskController@store']) !!}
                                    <div class="form-group mb-3 justify-content-center">
                                        {!! Form::text('name', null, ['class' => 'form-control mb-3', 'placeholder' => 'Enter sub task name']) !!}
                                        {!! Form::hidden('task_id', $task->id, []) !!}
                                        {!! Form::submit('Add Sub-Task to ' . $task->name . ' Task', ['class' => 'btn btn-primary d-block mx-auto']) !!}
                                    </div>
                                {!! Form::close() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div id="accordion" class="custom-accordion mb-4">
                <div class="card mb-0">
                    <div class="card-header" id="headingTwo">
                        <h5 class="m-0">
                            <a class="custom-accordion-title collapsed d-block pt-2 pb-2" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                                Update/Delete Existing subtasks<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="tab-pane  show active" id="profile1">
                            <div class="card card-body col-lg-12">
                                <div class="card-text">
                                    <div class="table-responsive-sm">
                                        <table class="table table-bordered table-centered mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Update</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @if ($task->subTasks->count() > 0)
                                                    @foreach ($task->subTasks as $subTask)
                                                        <tr>
                                                            <td>
                                                                {!! Form::model($subTask, ['method' => 'PUT', 'action' =>['SubTaskController@update', $subTask->id]]) !!}
                                                                    {!! Form::hidden('task_id', $task->id, []) !!}
                                                                    {!! Form::text('name', null, ['class' => 'form-control text-capitalize']) !!}
                                                            </td>
                                                            <td>
                                                                {!! Form::submit('Update', ['class' => 'btn-sm btn btn-dark']) !!}
                                                                {!! Form::close() !!}
                                                            </td>
                                                            <td style="cursor: pointer;" class="table-action text-center" onclick="deleted(this)">
                                                                <i class="mdi mdi-delete"></i>
                                                                {!! Form::open(['method' => 'DELETE', 'action' =>['SubTaskController@destroy', $subTask->id]]) !!}
                                                                {!! Form::close() !!}
                                                            </td>
                                                        </tr>
                                                    @endforeach
                                                @endif
                                            </tbody>
                                        </table>
                                    </div>
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

    <script async="true">
        function deleted(target)
        {
            $(target).children('form').submit();
        }
    </script>
@endsection
