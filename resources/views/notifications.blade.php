@extends('layouts.base')

@section('content')

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 mt-3">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"> <a href="{{route('home')}}">Home</a></li>
                    <li class="breadcrumb-item">All Notifications</li>
                </ol>

                <div class="card">
                    <div class="card-body">

                        <div class="tab-content">
                            <div class="tab-pane show active">
                                <div class="col-lg-12">
                                    <div class="slimScrollDiv" style="position: relative; overflow: hiddden; width: auto; height: 429px;">
                                        <div class="slimscrolSl" style="overflow: hidden; width: auto; height: 429px;  overflow-y: scroll;">
                                            <div class="timeline-alt pb-0">
                                                @if (count($allNotifications))
                                                    @foreach ($allNotifications  as $notification)
                                                        <div class="timeline-item mb-2"> 
                                                            <i class="dripicons-inbox bg-info-lighten text-info timeline-icon"></i>
                                                            <div class="timeline-item-info">
                                                                <span href="#" class="text-secondary font-weight-bold mb-1 d-block">{{ $notification->data['title'] }} </span>
                                                                <small>{{ $notification->data['subject'] }} </small>
                                                                <p class="mb-0 pb-2">
                                                                    <small class="text-muted"> {{ $notification->created_at->diffForHumans()}}  </small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    @endforeach
                                                @else
                                                    <div class="timeline-item">
                                                        <i class="dripicons-mail bg-info-lighten text-info timeline-icon"></i>
                                                        <div class="timeline-item-info">
                                                            <span href="#" class="text-primary font-weight-bold mb-1 d-block">You do not have any Notification at the moment </span>
                                                            <small> bravo !!! </small>
                                                            <p class="mb-0 pb-2">
                                                                <small class="text-muted"> a second ago  </small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="slimScrollBar" style="background: rgb(158, 165, 171); width: 8px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 231.702px;">
                                        </div>
                                        <div class="slimScrollRail" style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;">
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('scripts')
    {{-- <script src="{{ asset('js/widgets.js') }}"></script> --}}
@endsection


