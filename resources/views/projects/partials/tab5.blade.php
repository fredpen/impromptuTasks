<div class="tab-pane" id="basictab5">
    <div class="row d-flex flex-wrap w-100 justify-content-between">

        <div class="card widget-flat col-md-3">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('country_id', ' Country', ['class' => 'd-block mt-0 h4']) !!}
                    <span class="d-block h6 text-muted">I want my task done </span>
                        <div class="d-block">
                        <button id="taskModelModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#taskModelModal">{{$project->model ? $project->model : "Select Task model"}}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card widget-flat col-md-4">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('region_id', ' Region/State', ['class' => 'd-block mt-0 h4']) !!}
                    <span class="d-block h6 text-muted">I want my task done </span>
                        <div class="d-block">
                        <button id="taskModelModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#taskModelModal">{{$project->model ? $project->model : "Select Task model"}}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card widget-flat col-md-3">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('city_id', 'City', ['class' => 'd-block mt-0 h4']) !!}
                    <span class="d-block h6 text-muted">I want my task done </span>
                        <div class="d-block">
                        <button id="taskModelModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#taskModelModal">{{$project->model ? $project->model : "Select Task model"}}</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>
