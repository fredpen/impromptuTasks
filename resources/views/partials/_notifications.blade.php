
<div 
    class="modal fade show" 
    id="scrollable-modal" 
    tabindex="-1" 
    role="dialog" 
    aria-labelledby="scrollableModalTitle" 
    style="display: none; padding-right: 15px;" 
    aria-modal="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h5 class="modal-title" id="scrollableModalTitle">Unread Notification</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="card">
                    <div class="card-body">
                        <div class="col-lg-12">
                            <div class="timeline-alt pb-0">
                                @auth
                                    @if (count(Auth::user()->unreadNotifications))
                                        @foreach (Auth::user()->unreadNotifications as $notification)
                                            <div class="timeline-item">
                                                <i class="dripicons-inbox bg-info-lighten text-info timeline-icon"></i>
                                                <div class="timeline-item-info">
                                                    <small class="text-secondary font-weight-bold mb-1 d-block">{{ $notification->data['title'] }} </small>
                                                    <p>{{ $notification->data['subject'] }} </p>
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
                                @else
                                    <div class="timeline-item">
                                        <i class="dripicons-inbox bg-info-lighten text-info timeline-icon"></i>
                                        <div class="timeline-item-info">
                                            <span href="#" class="text-secondary font-weight-bold mb-1 d-block">Welcome to Impromptu Tasks !!</span>
                                            <small class="h5 text-muted"> We are glad to have You on board. If you are new, do not hesitate to 
                                                <a href="#">register. </a> <br>
                                                Registered user can sign in <a href="#">here</a>
                                            </small>
                                            <p class="mb-0 pb-2">
                                                <small class="text-muted"> a second ago   </small>
                                            </p>
                                        </div>
                                    </div>
                                @endauth
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="{{ route('notifications') }}" class="btn btn-primary">View all notification    </a>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>