@extends('layouts.admin')

@section('content')
    {{-- @include('partials.notifs', ['errorBody' => 'Comment has been saved']) --}}
    @include('partials.jumbotron', ['pageTitle' => 'Locations'])

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
                                Create New Locations<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <div class="card-text">

                                {!! Form::open(['method' => 'POST', 'action' => 'LocationController@store']) !!}
                                    <div class="form-group mb-3 justify-content-center">
                                        {!! Form::text('name', null, ['class' => 'form-control mb-3', 'placeholder' => 'Enter location name', 'required' => 'required']) !!}
                                        {!! Form::submit('Create location', ['class' => 'btn btn-primary d-block mx-auto']) !!}
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
                                Update Existing Locations<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
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
                                                <th>location Name</th>
                                                <th>Update</th>
                                                <th class="text-center">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @if ($locations->count() > 0)
                                                @foreach ($locations as $location)
                                                    <tr>
                                                        <td>
                                                            {!! Form::model($location, ['method' => 'PUT', 'action' =>['LocationController@update', $location->id]]) !!}
                                                                {!! Form::text('name', null, ['class' => 'form-control']) !!}
                                                        </td>
                                                        <td>
                                                            {!! Form::submit('Update', ['class' => 'btn-sm btn btn-primary']) !!}
                                                            {!! Form::close() !!}
                                                        </td>
                                                        <td style="cursor: pointer;" class="table-action text-center" onclick="deleted(this)">
                                                            <i class="mdi mdi-delete"></i>
                                                            {!! Form::open(['method' => 'DELETE', 'action' =>['LocationController@destroy', $location->id]]) !!}
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

        <div class="col-lg-8">
            <div id="accordion" class="custom-accordion mb-4">

                <div class="card mb-0">
                    <div class="card-header" id="headingedit">
                        <h5 class="m-0">
                            <a class="custom-accordion-title collapsed d-block pt-2 pb-2" data-toggle="collapse" href="#collapseedold" aria-expanded="false" aria-controls="collapseOne">
                                Existing Locations ({{ $locations->count() }})<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseedold" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card card-body">
                            <div class="card-text">
                                @if ($locations->count() > 0)
                                    <div class="table-responsive-sm">
                                        <table class="table table-bordered table-centered mb-0">
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>location Name</th>
                                                    <th>Created</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach ($locations as $key => $location) {
                                                    <tr>
                                                        <td> {{ $key + 1 }} </td>
                                                        <td> {{ $location->name }} </td>
                                                        <td> {{ $location->created_at->diffForHumans() }} </td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                @endif
                            </div>
                        </div>
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



