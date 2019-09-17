@extends('layouts.admin')

@section('content')
    {{-- @include('partials.notifs', ['errorBody' => 'Comment has been saved']) --}}
    @include('partials.jumbotron', ['pageTitle' => 'countries'])

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
                                Create New country<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <div class="card-text">

                                {!! Form::open(['method' => 'POST', 'action' => 'CountryController@store']) !!}
                                    <div class="form-group mb-3 justify-content-center">
                                        {!! Form::text('name', null, ['class' => 'form-control mb-3', 'placeholder' => 'Enter country name', 'required' => 'required']) !!}
                                        {!! Form::submit('Create country', ['class' => 'btn btn-primary d-block mx-auto']) !!}
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
                                Rename/Delete Existing country  ({{ $countries->count() }})<span class="float-right"><i class="mdi mdi-chevron-down accordion-arrow"></i></span>
                            </a>
                        </h5>
                    </div>
                    <div id="collapseedit" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card card-body flex-wrap flex-row justify-content-between">
                            @if ($countries->count() > 0)
                                @foreach ($countries as $country)
                                    <div class="col-md-5 d-flex my-2">
                                        <div id="editForm" class="mr-2">
                                            {!! Form::model($country, ['method' => 'PUT', 'action' =>['CountryController@update', $country->id]]) !!}
                                            {!! Form::text('name', null, ['class' => 'form-control']) !!}
                                        </div>
                                        <div style="cursor: pointer;" class="mr-1 table-action text-center" onclick="submitSiblingsForm(this)">
                                            <i style="font-size:22px" title="update" class="dripicons-document-edit text-primary"></i>
                                            {!! Form::close() !!}
                                        </div>
                                        <div style="cursor: pointer;" class="table-action text-center" onclick="submitChildrenForm(this)">
                                            <i title="Delete" style="font-size:22px" class="mdi mdi-delete text-danger"></i>
                                            {!! Form::open(['method' => 'DELETE', 'action' =>['CountryController@destroy', $country->id]]) !!}
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
   </div>

   <div class="row justify-content-center my-4">
        <div class="col-6">
            {{ $countries->links() }}
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



