@extends('layouts.base')

@section('content')

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7 mt-3">
                <div class="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs nav-bordered mb-3">
                            <li class="nav-item">
                                <a href="#home-b1" data-toggle="tab" aria-expanded="false" class="nav-link">
                                    <span class="d-lg-block">All notifications </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#profile-b1" data-toggle="tab" aria-expanded="true" class="nav-link active">
                                    <span class="d-lg-block">Unread notifications {{count($unreadNotifications) ? " (" . count($unreadNotifications) . ")" : ""}}</span>
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane" id="home-b1">
                                <div class="col-lg-12">
                                    {{-- deleteall notf --}}
                                    <div class="slimScrollDiv" style="position: relative; overflow: hiddden; width: auto; height: 456px;">
                                        <div class="slimscrolSl" style="max-height: 330px; overflow: hidden; width: auto; height: 456px;  overflow-y: scroll;">
                                            <div class="timeline-alt pb-0">
                                                @if (count($allNotifications))
                                                    @foreach ($allNotifications  as $notification)
                                                        <div class="timeline-item">update
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

                            <div class="tab-pane show active" id="profile-b1">
                                <div class="col-lg-12">
                                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: auto;">
                                        <div class="slimscroll" style="max-height: 330px; overflow: hidden; width: auto; height: 456px; overflow-y: scroll;">
                                            <div class="timeline-alt pb-0">
                                                @if (count($unreadNotifications))
                                                    @foreach ($unreadNotifications  as $notification)
                                                        <div class="timeline-item">
                                                            <i class="dripicons-mail bg-info-lighten text-info timeline-icon"></i>
                                                            <div class="timeline-item-info">
                                                                <span href="#" class="text-primary font-weight-bold mb-1 d-block">{{ $notification->data['title'] }} </span>
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


