@extends('layouts.base')

@section('content')

    @if (session('message'))
        <div class="container">
            <div class="alert alert-success text-secondary h5 w-100 m-0">
                <strong><i class="mr-2 mdi mdi-heart-outline"></i> </strong>   {{ session('message') }}
            </div>
        </div>
    @endif


    <div class="container">
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
                                            <li class="list-inline-item mr-3">
                                                <h5 class="mb-1"> {{$user->revenue ? $user->revenue : 0 }} </h5>
                                                <p class="mb-0 font-13 text-white-50">Total Revenue</p>
                                            </li>
                                            <li class="list-inline-item">
                                                <h5 class="mb-1"> {{ $user->orders_in ? $user->orders_in : 0 }} </h5>
                                                <p class="mb-0 font-13 text-white-50">Number of Tasks Completed</p>
                                            </li>
                                        </ul>
                                    </div> <!-- end media-body-->
                                </div>
                            </div> <!-- end col-->

                            @if (Auth::id() == $user->id)
                                <div class="col-sm-4">
                                    <div class="text-center mt-sm-0 mt-3 text-sm-right">
                                        <a href="{{ route('account.edit', $user->id) }}" class="btn btn-light">
                                            <i class="mdi mdi-account-edit mr-1"></i> Edit Profile
                                        </a>

                                        <a href="{{ route('notifications') }}" class="btn btn-light">
                                            <i class="mdi mdi-news-edit mr-1"></i> Messages
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


        <div class="row">
            <div class="col-md-4">
                <!-- Personal-Information -->
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title mt-0 mb-3">Task Master Information</h4>
                        <p class="text-muted font-13">  {{$user->bio }} </p>

                        <hr>

                        <div class="text-left">
                            <p class="text-dark"><strong>Full Name :</strong> <span class="text-muted ml-2"> {{ ucwords($user->name)}} </span></p>

                            <p class="text-dark"><strong>Email :</strong> <span class="text-muted ml-2"> {{ ucwords($user->email)}} </span></p>

                            <p class="text-dark"><strong>Country :</strong> <span class="text-muted ml-2"> {{ ucwords($user->country->name)}} </span></p>
                            <p class="text-dark"><strong>Region :</strong> <span class="text-muted ml-2"> {{ ucwords($user->region->name)}} </span></p>
                            <p class="text-dark"><strong>City :</strong> <span class="text-muted ml-2"> {{ ucwords($user->city->name)}} </span></p>



                            <p class="text-dark mb-0"><strong>Socials :</strong>
                                <a class="d-inline-block ml-2 text-muted" title="" data-placement="top" data-toggle="tooltip" href="{{ $user->linkedln}}" data-original-title="linkedln"><i class="mdi mdi-linkedin"></i></a>
                                {{-- <a class="d-inline-block ml-2 text-muted" title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Twitter"><i class="mdi mdi-twitter"></i></a>
                                <a class="d-inline-block ml-2 text-muted" title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Skype"><i class="mdi mdi-skype"></i></a> --}}
                            </p>

                        </div>
                    </div>
                </div>
            </div> <!-- end col-->

            <div class="col-md-8">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <i class="dripicons-basket float-right text-muted"></i>
                                <h6 class="text-dark text-uppercase mt-0">Skills</h6>
                                @foreach ($user->skills as $skill)
                                    <span 
                                         class="mb-2 badge badge-light text-capitalise badge-pill"
                                        style="font-size:100%">
                                        {{ $skill->name }}
                                    </span>
                                @endforeach
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div><!-- end col -->

                    <div class="col-sm-12">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <i class="dripicons-basket float-right text-muted"></i>
                                <h6 class="text-dark text-uppercase mt-0">Job interests</h6>
                                @foreach ($user->jobs as $job)
                                    <span 
                                            class="badge badge-light badge-pill text-capitalise"
                                        style="font-size:100%">
                                        {{ $job->name }}
                                    </span>
                                @endforeach
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div><!-- end col -->
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="header-title mb-3">Ongoing Task history</h5>

                        <div class="table-responsive">
                            <table class="table table-hover table-centered mb-0">
                                <thead>
                                    <tr>
                                        <th> Task </th>
                                        <th>started on</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ASOS Ridley High Waist</td>
                                        <td>$79.49</td>
                                        <td><span class="badge badge-primary">82 Pcs</span></td>
                                        <td>$6,518.18</td>
                                    </tr>
                                    <tr>
                                        <td>Marco Lightweight Shirt</td>
                                        <td>$128.50</td>
                                        <td><span class="badge badge-primary">37 Pcs</span></td>
                                        <td>$4,754.50</td>
                                    </tr>
                                    <tr>
                                        <td>Half Sleeve Shirt</td>
                                        <td>$39.99</td>
                                        <td><span class="badge badge-primary">64 Pcs</span></td>
                                        <td>$2,559.36</td>
                                    </tr>
                                    <tr>
                                        <td>Lightweight Jacket</td>
                                        <td>$20.00</td>
                                        <td><span class="badge badge-primary">184 Pcs</span></td>
                                        <td>$3,680.00</td>
                                    </tr>
                                    <tr>
                                        <td>Marco Shoes</td>
                                        <td>$28.49</td>
                                        <td><span class="badge badge-primary">69 Pcs</span></td>
                                        <td>$1,965.81</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> <!-- end table responsive-->
                    </div> <!-- end col-->
                </div> <!-- end row-->

            </div>
            <!-- end col -->

        </div>
        <!-- end row -->

    </div>
@endsection
