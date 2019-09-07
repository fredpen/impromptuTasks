<div id="countryModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Select Country</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateCountry(this, 'country_id')" id="country_id" name="country_id" class="h5 mt-0 col-sm-7 form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                        @foreach ($countries as $country)
                            <option {{$project->country_id == $country->id ? "selected" : ""}} value="{{$country->id}}">{{$country->name}}</option>
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

<div id="regionModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Select Category</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateRegion(this, 'region_id')" id="region_id" name="task_id" class="h5 mt-0 col-sm-7 form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                        @if ($project->country)
                            @foreach ($regions as $region)
                                <option {{ $project->region ? ($project->region_id == $region->id ? "selected" : "" ) : ""}} value="{{$region->id}}">{{$region->name}}</option>
                            @endforeach
                        @else
                            <option value="0">Select a country first</option>
                        @endif
                    </select>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div id="cityModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Select Category</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateCity(this, 'city_id')" id="city_id" name="city_id" class="h5 mt-0 col-sm-7 form-control select2 select2-hidden-accessible form-control" data-toggle="select2">
                        @if ($project->region)
                            @foreach ($cities as $city)
                                <option {{ $project->city ? ($project->city_id == $city->id ? "selected" : "" ) : ""}} value="{{$city->id}}">{{$city->name}}</option>
                            @endforeach
                        @else
                            <option value="0">Kindly select a region first</option>
                        @endif

                    </select>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="tab-pane" id="basictab5">
    <div class="row d-flex flex-wrap justify-content-between">

        <div class="card widget-flat col-md-5">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('country_id', ' Country', ['class' => 'd-block mt-0 h4']) !!}
                    <span class="d-block h6 text-muted">Select country</span>
                        <div class="d-block">
                        <button id="countryModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#countryModal">{{$project->country ? $project->country->name : "Select Country"}}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card widget-flat col-md-6">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('region_id', ' Region/State', ['class' => 'd-block mt-0 h4']) !!}
                    <span class="d-block h6 text-muted">Select region</span>
                        <div class="d-block">
                        <button id="regionModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#regionModal">{{$project->region ? $project->region->name : "Select Region"}}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card widget-flat col-md-5">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('city_id', 'City', ['class' => 'd-block mt-0 h4']) !!}
                    <span class="d-block h6 text-muted">I want my task done </span>
                        <div class="d-block">
                        <button id="cityModalButton" type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#cityModal">{{$project->city ? $project->city->name : "Select City"}}</button>
                    </div>
                </div>
            </div>
        </div>

         <div class="card widget-flat col-md-6">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12 mb-3">
                    {!! Form::label('location', 'Street Level Address', ['class' => 'd-block mt-0 h4']) !!}
                    <textarea onfocusout="updateProject(this, 'location')" id="location" data-toggle="maxlength" class="mb-3 form-control" data-threshold="400" maxlength="400" rows="2" placeholder="No 10, Kano Steet, Waec">{{$project->location}}</textarea>
                </div>
            </div>
        </div>
    </div>
</div>