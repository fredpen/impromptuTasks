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
        @include('partials._projectHeaderShow', $user)


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

                {{-- slot in the task history table --}}
                @include('partials._taskHistory', [$appliedProjects, $assignedProjects])

                
                
            </div>
        </div>
    </div>
@endsection
