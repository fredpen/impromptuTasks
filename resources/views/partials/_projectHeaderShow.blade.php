
{{-- projectmaster and giver show  --}}

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

                                    <h4 class="mt-1 mb-1 text-white"> {{$user->name}} </h4>
                                    <p class="font-13 text-white-50"> {{$user->title}} </p>

                                    <ul class="mb-0 list-inline text-light">
                                        {{-- <li class="list-inline-item mr-3">
                                            <h5 class="mb-1"> {{$user->revenexoenseue ? $user->revenue : 0 }} </h5>
                                            <p class="mb-0 font-13 text-white-50">Total Revenue</p>
                                        </li> --}}
                                        <li class="list-inline-item">
                                            <h5 class="mb-1"> {{ $user->orders_out ? $user->orders_out : 0 }} </h5>
                                            <p class="mb-0 font-13 text-white-50">Number of Projects</p>
                                        </li>
                                    </ul>
                                </div> <!-- end media-body-->
                            </div>
                        </div> <!-- end col-->

                        @if (Auth::id() == $user->id)
                            <div class="col-sm-4">
                                <div class="text-center mt-sm-0 mt-3 text-sm-right">
                                        <a href="{{ route('notifications') }}" class="btn btn-light">
                                                <i class="mdi mdi-news-edit mr-1"></i> Messages
                                            </a>
                                    <a href="{{ route('account.edit', $user->id) }}" class="my-2 btn btn-light">
                                        <i class="mdi mdi-account-edit mr-1"></i> Edit Profile
                                    </a>

                                    
                                </div>
                            </div> <!-- end col-->
                        @endif
                    </div> <!-- end row -->
                </div> <!-- end card-body/ profile-user-box-->
            </div><!--end profile/ card -->
        </div> <!-- end col-->
    </div>
    <!-- end row -->