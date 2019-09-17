@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'tasks'])
    @if ($errors->any())
        @include('partials.errorBag')
    @endif

    <div class="row mt-4">
        <div class="col-lg-12">
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
                                        {!! Form::label('name', 'For storing more than one Task at a time, Separate them with comma like so web dev, mobiledev', ['class' => 'h6']) !!}
                                        {!! Form::text('name', null, ['class' => 'form-control mb-3', 'placeholder' => 'Enter task name']) !!}
                                        {!! Form::submit('Create Task', ['class' => 'btn btn-dark d-block mx-auto']) !!}
                                    </div>
                                {!! Form::close() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12">
            <div id="accordion" class="custom-accordion mb-4">

                <div class="card mb-0">
                    <div class="card-header" id="headingedit">
                        <h5 class="m-0">
                            <a class="custom-accordion-title collapsed d-block pt-2 pb-2" data-toggle="collapse" href="#collapseedit" aria-expanded="false" aria-controls="collapseOne">
                                Update/Rename Existing tasks<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseedit" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card card-body flex-wrap flex-row justify-content-between">
                            @if ($tasks->count() > 0)
                                @foreach ($tasks as $task)
                                    <div class="col-md-5 d-flex my-2">
                                        <div id="editForm" class="mr-2">
                                            {!! Form::model($task, ['method' => 'PUT', 'action' =>['TasksController@update', $task->id]]) !!}
                                            {!! Form::text('name', null, ['class' => 'form-control']) !!}
                                        </div>
                                        <div style="cursor: pointer;" class="mr-1 table-action text-center" onclick="submitSiblingsForm(this)">
                                            <i style="font-size:22px" title="update" class="dripicons-document-edit text-primary"></i>
                                            {!! Form::close() !!}
                                        </div>
                                        <div style="cursor: pointer;" class="table-action text-center" onclick="submitChildrenForm(this)">
                                            <i title="Delete" style="font-size:22px" class="mdi mdi-delete text-danger"></i>
                                            {!! Form::open(['method' => 'DELETE', 'action' =>['TasksController@destroy', $task->id]]) !!}
                                            {!! Form::close() !!}
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {{-- <div class="col-lg-12">
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
        </div> --}}

        @if ($tasks->count() > 0)
            @foreach ($tasks as $task)

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                <a data-toggle="collapse" href="#cardCollpase{{$task->id}}" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i class="mdi mdi-plus"></i></a>
                            </div>

                            <h5 class="card-title mb-0">{{$task->name}}</h5>

                            <div id="cardCollpase{{$task->id}}" class="collapse pt-3">
                                <ul class="list-group text-capitalize">
                                    @if ($task->subTasks->count() > 0)

                                        @foreach ($task->subTasks as $subTask)
                                            <li class="list-group-item">
                                                <a href="{{ route('tasks.show', $task->id) }}">{{ $subTask->name }}, </a>
                                            </li>
                                        @endforeach

                                    @else
                                        <span class="h6 text-primary">There is no subtasks asscoiated with this task yet</span>
                                    @endif
                                </ul>
                                <div> <a href="{{ route('tasks.show', $task->id) }}" class="btn btn-dark d-inline-block mt-4 mx-auto">Add Sub/Edit tasks</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        @endif
    </div>

    <div class="row justify-content-center my-4">
        <div class="col-6">
            {{ $tasks->onEachSide(5)->links() }}
        </div>
    </div>
@endsection


@section('scripts')
    <script async="true">
        function submitChildrenForm(target)
        {
            return $(target).children('form').submit();
        }

        function submitSiblingsForm(target) {
            return $(target).siblings('#editForm').children('form').submit();
        }
    </script>
@endsection


