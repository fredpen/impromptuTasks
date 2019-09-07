@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'tasks'])
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
                                Create New Task<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <div class="card-text">

                                {!! Form::open(['method' => 'POST', 'action' => 'TasksController@store']) !!}
                                    <div class="form-group mb-3 justify-content-center">
                                        {!! Form::text('name', null, ['class' => 'form-control mb-3', 'placeholder' => 'Enter task name']) !!}
                                        {!! Form::submit('Create Task', ['class' => 'btn btn-primary d-block mx-auto']) !!}
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
                    <div class="card-header" id="headingedit">
                        <h5 class="m-0">
                            <a class="custom-accordion-title collapsed d-block pt-2 pb-2" data-toggle="collapse" href="#collapseedit" aria-expanded="false" aria-controls="collapseOne">
                                Update Existing tasks<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseedit" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card card-body">
                            <div class="card-text">
                                <div class="table-responsive-sm">
                                    <table class="table table-bordered table-centered mb-0">
                                        <thead>
                                            <tr>
                                                <th>Task Name</th>
                                                <th>Update</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if ($tasks->count() > 0)
                                                @foreach ($tasks as $task)
                                                    <tr>
                                                        <td>
                                                            {!! Form::model($task, ['method' => 'PUT', 'action' =>['TasksController@update', $task->id]]) !!}
                                                                {!! Form::text('name', null, ['class' => 'form-control']) !!}
                                                        </td>
                                                        <td>
                                                            {!! Form::submit('Update', ['class' => 'btn-sm btn btn-primary']) !!}
                                                            {!! Form::close() !!}
                                                        </td>
                                                        <td style="cursor: pointer;" class="table-action text-center" onclick="deleted(this)">
                                                            <i class="mdi mdi-delete"></i>
                                                            {!! Form::open(['method' => 'DELETE', 'action' =>['TasksController@destroy', $task->id]]) !!}
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

        @if ($tasks->count() > 0)
            @foreach ($tasks as $task)

                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase{{$task->id}}" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i class="mdi mdi-plus"></i></a>
                            </div>

                            <h5 class="card-title mb-0">{{$task->name}}</h5>

                            <div id="cardCollpase{{$task->id}}" class="collapse pt-3 ">
                                <ul class="list-group text-capitalize">
                                    @if ($task->subTasks->count() > 0)
                                        @foreach ($task->subTasks as $subTask)
                                            <li class="list-group-item">
                                                <a href="{{ route('tasks.show', $task->id) }}">{{ $subTask->name }}</a>
                                            </li>
                                        @endforeach
                                    @endif
                                </ul>
                                <div> <a href="{{ route('tasks.show', $task->id) }}" class="btn btn-primary d-inline-block mt-4 mx-auto">Add Sub/Edit tasks</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        @endif
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
