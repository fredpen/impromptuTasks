
<div class="tab-pane" id="basictab5">
    <div class="row d-flex flex-wrap justify-content-between">

        <div class="card widget-flat col-md-5">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('country_id', ' Country', ['class' => 'd-block mt-0 h4']) !!}
                    <button id="countryModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded">{{$project->country->name}}</button>
                </div>
            </div>
        </div>

        <div class="card widget-flat col-md-6">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('region_id', ' Region/State', ['class' => 'd-block mt-0 h4']) !!}
                    {{-- <span class="d-block h6 text-muted">Task region</span> --}}
                    <button id="regionModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded">{{$project->region->name}}</button>
                </div>
            </div>
        </div>

        <div class="card widget-flat col-md-5">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('city_id', 'City', ['class' => 'd-block mt-0 h4']) !!}
                    <button id="cityModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded"> {{$project->city->name}}</button>
                </div>
            </div>
        </div>

         <div class="card widget-flat col-md-6">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('location', 'Street Level Address', ['class' => 'd-block mt-0 h4']) !!}
                    <button id="cityModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded"> {{$project->location}}</button>
                </div>
            </div>
        </div>
    </div>
</div>
