@extends('layouts.base')

@section('content')
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
                            <p class="text-muted"><strong>Full Name :</strong> <span class="ml-2"> {{ ucwords($user->name)}} </span></p>

                            <p class="text-muted"><strong>Email :</strong> <span class="ml-2"> {{ ucwords($user->email)}} </span></p>

                            <p class="text-muted"><strong>Country :</strong> <span class="ml-2"> {{ ucwords($user->country->name)}} </span></p>
                            <p class="text-muted"><strong>Region :</strong> <span class="ml-2"> {{ ucwords($user->region->name)}} </span></p>
                            <p class="text-muted"><strong>City :</strong> <span class="ml-2"> {{ ucwords($user->city->name)}} </span></p>



                            <p class="text-muted mb-0"><strong>Socials :</strong>
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
                                <h6 class="text-muted text-uppercase mt-0">Skills</h6>
                                @foreach ($user->skills as $skill)
                                    <span class="h5 mr-2 text-primary">{{ $skill->name }}</span>
                                @endforeach
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div><!-- end col -->

                    <div class="col-sm-4">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <i class="dripicons-box float-right text-muted"></i>
                                <h6 class="text-muted text-uppercase mt-0">Revenue</h6>
                                <h2 class="m-b-20">$<span>46,782</span></h2>
                                <span class="badge badge-danger"> -29% </span> <span class="text-muted">From previous period</span>
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div><!-- end col -->

                    <div class="col-sm-4">
                        <div class="card tilebox-one">
                            <div class="card-body">
                                <i class="dripicons-jewel float-right text-muted"></i>
                                <h6 class="text-muted text-uppercase mt-0">Product Sold</h6>
                                <h2 class="m-b-20">1,890</h2>
                                <span class="badge badge-primary"> +89% </span> <span class="text-muted">Last year</span>
                            </div> <!-- end card-body-->
                        </div> <!--end card-->
                    </div><!-- end col -->

                </div>
                <!-- end row -->


                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title mb-3">task history</h4>

                        <div class="table-responsive">
                            <table class="table table-hover table-centered mb-0">
                                <thead>
                                    <tr>
                                        <th>Task </th>
                                        <th>Rating</th>
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
