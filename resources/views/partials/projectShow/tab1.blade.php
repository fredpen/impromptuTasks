
<div class="tab-pane active mb-3" id="basictab1">
    <div class="row">
        <div class="card widget-flat col-sm-12">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 col-lg-9">
                    {!! Form::label('title', 'Project Title', ['class' => 'd-block mt-0 h4']) !!}
                    <p>{{$project->title}}</p>
                </div>
            </div>
        </div>

        <div class="d-flex flex-wrap w-100 justify-content-between">
            <div class="card widget-flat col-md-5">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('task_id', ' Task category', ['class' => 'd-block mt-0 h4']) !!}
                        <div class="d-block">
                            <button id="fredTaskSelectionModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredCategoryModal">{{$project->task->name}}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card widget-flat col-md-6">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('sub_task_id', 'Task Sub category', ['class' => 'd-block mt-0 h4']) !!}
                        <div class="d-block">
                            <button id="fredSubTaskSelectionModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredSubCategoryModal">{{$project->subtask ? $project->subtask->name : "Select a sub task"}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
