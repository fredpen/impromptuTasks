<div id="fredTaskDurationModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Proposed start date</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateTaskDuration(this, 'duration')" id="duration" name="duration" class="form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                        <option>Kindly Make a Selection</option>
                        @foreach ($duration as $time)
                            <option {{ $project->duration == $time ?  "selected" : "" }} value="{{$time}}">{{$time}}</option>
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

<div id="fredDateModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Proposed start date</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <span class="d-block h6 text-danger">month/day/year</span>
                    <input onchange="updateTaskStartDate(this, 'start_date')" id="start_date" type="text" value="{{$project->start_date ? $project->start_date : date('m/d/Y', time())}}" class="form-control" data-provide="datepicker" data-date-autoclose="true" placeholder="Select Your start date">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div id="frednumber" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Number of task master you want for your task</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateTaskMasterNumber(this, 'num_of_taskMaster')" id="num_of_taskMaster" name="num_of_taskMaster" class="form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                        @for ($i = 1; $i < 10; $i++)
                            <option {{ $project->num_of_taskMaster ? ($project->num_of_taskMaster == $i ? "selected" : "" ) : ""}} value="{{$i}}">{{ $i == 1 ? $i. ' task master' : $i . ' task masters'}}</option>
                        @endfor
                            <option {{ $project->num_of_taskMaster ? ($project->num_of_taskMaster > 10 ? "selected" : "" ) : ""}} value="more than 10">more than 10 Task Masters</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>


<div class="tab-pane" id="basictab3">
    <div class="row">
        <div class="d-flex flex-wrap w-100 justify-content-between">
            <div class="card widget-flat col-md-5">
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

            <div class="card widget-flat col-md-6">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('start_date', 'Proposed Start Date', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6">You can still make changes after posting</span>
                         <div class="d-block">
                            <button id="fredDateModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredDateModal">{{$project->start_date ? $project->start_date : "Select Start Date"}}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card widget-flat col-md-5">
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


            <div class="card widget-flat col-md-6">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('num_of_taskMaster', 'Number of task Master', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6">How many task master do you need for this task</span>
                         <div class="d-block">
                            <button id="frednumberButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#frednumber">{{$project->num_of_taskMaster ? $project->num_of_taskMaster  : "1 Task master"}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
