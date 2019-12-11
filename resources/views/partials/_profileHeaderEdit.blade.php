
{{-- utils --}}
{{-- used in projectmaster and taskgiver --}}
<div class="row mt-3">
        <div class="col-sm-12">
            <!-- Profile -->
            <div class="card bg-primary">
                <div class="card-body profile-user-box">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="media">
                                <span class="float-left m-2 mr-4"><img src="{{ $user->imageurl ? asset('images/'.$user->imageurl)  : asset('images/basic.jpg') }}" style="height: 100px;" alt="" class="img-thumbnail"></span>
                                <div class="media-body">

                                    <h4 class="mt-1 mb-1 text-white">{{ ucwords($user->name) }}</h4>
                                    <p class="font-13 text-white-50">{{ $user->email }} </p>

                                    <ul class="mb-0 list-inline text-light">
                                        <li class="list-inline-item mr-3">
                                            <h5 class="mb-1">Registered:</h5>
                                            <p class="mb-0 font-13 text-white-50"> {{ $user->created_at->diffForHumans() }}</p>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="mb-1">Updated:</h5>
                                            <p class="mb-0 font-13 text-white-50"> {{ $user->updated_at->diffForHumans() }}</p>
                                        </li>
                                    </ul>
                                </div> <!-- end media-body-->
                            </div>
                        </div> <!-- end col-->

                        <div class="col-sm-4">
                            <div class="text-center mt-sm-0 mt-3 text-sm-right">
                                <a href="{{ route('account.show', $user->id) }}" class="btn btn-light">
                                    <i class="mdi mdi-account-edit mr-1"></i> Show Profile
                                </a>
                            </div>
                        </div> <!-- end col-->
                    </div> 
                </div> 
            </div>
        </div>
    </div>