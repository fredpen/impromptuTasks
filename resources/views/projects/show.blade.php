@extends('layouts.base')
@section('scripts')
    <script src="{{ asset('js/form.js') }}"></script>
    <script>var project_id = {{ $project-> id}};</script>
@endsection

@section('content')
    <div class="container">

        {{-- errorBag --}}
        <div id="postingModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog">
                <div class="jq-toast-single jq-icon-danger d-flex" role="alert">
                    <i class="mr-2 mdi mdi-heart-broken-outline" style="font-size: 30px"></i>
                    <span style="right: 0" class="close close-jq-toast-single" data-dismiss="modal" aria-hidden="true">×</span>
                    <div id="postErrMess"></div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center align-items-center mx-0">
            <div class="col-md-12 mt-2">
                <div id="basicwizard">

                    <ul class="nav nav-pills nav-justified form-wizard-header mb-4">

                        <li class="nav-item">
                            <a href="#basictab1" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
                                <i class="mdi mdi-fountain-pen"></i>
                                <span class="d-none d-sm-inline">Basics</span>
                            </a>
                        </li>

                        @if ($project->model == "onsite")
                            <li class="nav-item">
                                <a href="#basictab5" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                    <i class="mdi mdi-account-circle mr-1"></i>
                                    <span class="d-none d-sm-inline">Location</span>
                                </a>
                            </li>
                        @endif

                        <li class="nav-item">
                            <a href="#basictab2" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                <i class="mdi mdi-account-star-outline"></i>
                                <span class="d-none d-sm-inline">Description</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#basictab3" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                <i class="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                                <span class="d-none d-sm-inline">Timeline </span>

                            </a>
                        </li>
                            <li class="nav-item">
                            <a href="#basictab4" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                <i class="mdi mdi-account-circle mr-1"></i>
                                <span class="d-none d-sm-inline">Files</span>
                            </a>
                        </li>

                    </ul>

                    <div class="tab-content b-0 mb-0">
                        @include('partials.projectShow.tab1')

                        @if ($project->model == "onsite")
                            @include('partials.projectShow.tab5')
                        @endif

                        @include('partials.projectShow.tab2')

                        @include('partials.projectShow.tab3')

                        @include('partials.projectShow.tab4')


                            <div class="col-12">
                                <div class="form-group row m-3">
                                    <div class="col-md-6 offset-md-3">
                                        @if ($project->user_id === Auth::id())
                                        
                                        <button type="submit" class="d-block mx-auto btn btn-primary">  {{ __('Edit Task') }} </button>
                                        @else
                                            <button type="submit" class="d-block mx-auto btn btn-primary">  {{ __('Apply Task') }} </button>
                                        @endif
                                    </div>
                                </div>
                            </div>


                        <ul class="list-inline wizard mb-3">
                            <li class="previous list-inline-item disabled">
                                <a href="#" class="btn btn-info" title="previous"><i class="dripicons-arrow-thin-left"></i></a>
                            </li>

                            <li class="next list-inline-item float-right">
                                <a href="#" class="btn btn-info"><i class="dripicons-arrow-thin-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

