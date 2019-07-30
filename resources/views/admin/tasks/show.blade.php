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

    <div class="row mt-4 justify-content-center align-items-center">
        <div class="col-xl-10">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
                        <li class="nav-item">
                            <a href="#home1" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
                                <i class="mdi mdi-home-variant d-lg-none d-block mr-1"></i>
                                <span class="d-none d-lg-block">Create Sub-task</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#profile1" data-toggle="tab" aria-expanded="true" class="nav-link rounded-0 active">
                                <i class="mdi mdi-account-circle d-lg-none d-block mr-1"></i>
                                <span class="d-none d-lg-block"> Update Sub Task</span>
                            </a>
                        </li>
                        {{-- <li class="nav-item">
                            <a href="#settings1" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
                                <i class="mdi mdi-settings-outline d-lg-none d-block mr-1"></i>
                                <span class="d-none d-lg-block">Info</span>
                            </a>
                        </li> --}}
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane justify-content-center align-items-center" id="home1">
                             <div class="card card-body col-lg-6 ">
                                <div class="card-text">
                                    {!! Form::open(['method' => 'POST', 'action' => 'SubTaskController@store']) !!}
                                        <div class="form-group mb-3 justify-content-center">
                                            {!! Form::text('name', null, ['class' => 'form-control mb-3', 'placeholder' => 'Enter task name']) !!}
                                            {!! Form::hidden('task_id', $task->id, []) !!}
                                            {!! Form::submit('Add Sub-Task to ' . $task->name . ' Task', ['class' => 'btn btn-dark d-block mx-auto']) !!}
                                        </div>
                                    {!! Form::close() !!}
                                </div>
                            </div>
                        </div>

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

                        {{-- <div class="tab-pane" id="settings1">
                           All tasks are connected to a sub tasks
                        </div> --}}
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
