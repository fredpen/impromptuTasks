<div class="tab-pane" id="basictab3">
    <div class="row">
        <div class="d-flex flex-wrap w-100 justify-content-between">
            <div class="card widget-flat col-md-5">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('model', ' Task Model', ['class' => 'd-block mt-0 h4']) !!}
                        <button id="taskModelModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded"> {{$project->model}}</button>
                    </div>
                </div>
            </div>

            <div class="card widget-flat col-md-6">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('duration', ' Task Duration', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block h6 text-muted">Estimated time for the project</span>
                         <div class="d-block">
                            <button id="fredTaskDurationModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredTaskDurationModal">{{$project->duration ? $project->duration : "Select Task duration"}}</button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="card widget-flat col-md-5">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('start_date', 'Proposed Start Date', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6">Task start date</span>
                         <div class="d-block">
                            <button id="fredDateModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredDateModal">{{$project->start_date ? $project->start_date : "Select Start Date"}}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card widget-flat col-md-6">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('num_of_taskMaster', 'Number of task Master', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6">Number of task master needed for this task</span>
                        <button id="frednumberButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded">{{$project->num_of_taskMaster}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
