<div id="fredCategoryModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Select Category</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateTask(this, 'task_id')" id="task_id" name="task_id" class="h5 mt-0 col-sm-7 form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                        @foreach ($tasks as $task)
                            <option {{$project->task_id == $task->id ? "selected" : ""}} value="{{$task->id}}">{{$task->name}}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div id="fredSubCategoryModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
            <div class="modal-content">
                <div class="modal-header modal-colored-header bg-primary">
                    <h4 class="modal-title" id="primary-header-modalLabel">Select Sub Category</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <div class="col-12 my-3">
                        <select onchange="updateSubtask(this, 'sub_task_id')" id="sub_task_id" name="sub_task_id" class="form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                            <option value="0">Kindly select a Subtask</option>
                            @if ($project->task)
                                @foreach ($project->task->subTasks as $subtask)
                                    <option {{ $project->sub_task_id ? ($project->sub_task_id == $subtask->id ? "selected" : "" ) : ""}} value="{{$subtask->id}}">{{$subtask->name}}</option>
                                @endforeach
                            @endif
                        </select>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Continue</button>
                </div>
            </div>
    </div>
</div>

<div id="taskModelModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Number of task master you want for your task</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateTaskModel(this, 'model')" id="model" name="model" class="form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                        <option {{$project->model == "onsite" ? "selected" : ""}} value="onsite">Onsite</option>
                        <option {{$project->model == "remote" ? "selected" : ""}} value="remote">Remote</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>


<div class="tab-pane active mb-2" id="basictab1">
    <div class="row">
        <div class="d-flex flex-wrap w-100 justify-content-between col-sm-12">
            <div class="card widget-flat col-md-12 mb-3">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 pb-3">
                        {!! Form::label('title', 'Enter the title for your Task', ['class' => 'd-block mt-0 h4']) !!}
                        {{-- <h6 class="text d-block mt-2">Sample: </h6> --}}
                        <ul class="text-muted h6 mb-3">
                            <li>Experience Plumber needed for a 3 hours job</li>
                            <li>Female French Tutor for a Grade 5 student</li>
                        </ul>
                        <input 
                            onfocusout="updateProject(this, 'title')" 
                            type="text" class="form-control" 
                            value="{{$project->title}}" 
                            maxlength="80" 
                            name="title" 
                            data-toggle="maxlength" 
                            data-threshold="80" 
                            autocomplete="off" 
                            id="task_title"
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex flex-wrap w-100 justify-content-between col-sm-12">
            <div class="card  widget-flat col-md-5 ">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('model', ' Task Model', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block h6 text-muted">I want my task done </span>
                            <div class="d-block">
                            <button id="taskModelModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#taskModelModal">{{$project->model ? $project->model : "Select Task model"}}</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card widget-flat col-md-6">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('task_id', ' Task category', ['class' => 'd-block mt-0 h4']) !!}
                         <span class="d-block h6 text-muted">I want Task masters who have experience in</span>
                        <div class="d-block">
                            <button id="fredTaskSelectionModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredCategoryModal">{{$project->task->name}}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card widget-flat col-md-5">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('experience', 'Task Master Expertise', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6">Experience most times is directly related to cost</span>
                        <div class="d-block">
                            <button 
                                id="fredExperienceModalButton" 
                                type="button" class="mt-2 btn btn-sm btn-light btn-rounded"
                                data-toggle="modal" 
                                data-target="#fredExperienceModal">{{$project->experience ? $project->experience : "Select level of expertise"}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card widget-flat col-md-6">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('sub_task_id', 'Task Sub category', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6">I want Task masters who specialize in</span>
                        <div class="d-block">
                            <button id="fredSubTaskSelectionModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredSubCategoryModal">{{$project->subtask ? $project->subtask->name : "Select a sub task"}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
