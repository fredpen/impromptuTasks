@extends('layouts.base')

@section('content')
    <div class="container">
        @include('partials._projectHeaderShow', $user)

        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title mt-0 mb-3">Task Master Information</h4>

                        <div class="text-left">
                            <p class="text-muted"><strong>Full Name :</strong> <span class="ml-2"> {{ ucwords($user->name)}} </span></p>

                            <p class="text-muted"><strong>Email :</strong> <span class="ml-2"> {{ ucwords($user->email)}} </span></p>

                            <p class="text-muted"><strong>Country :</strong> <span class="ml-2"> {{ ucwords($user->country->name)}} </span></p>
                            <p class="text-muted"><strong>Region :</strong> <span class="ml-2"> {{ ucwords($user->region->name)}} </span></p>
                            <p class="text-muted"><strong>City :</strong> <span class="ml-2"> {{ ucwords($user->city->name)}} </span></p>

                            <p class="text-muted mb-0"><strong>Socials :</strong>
                                <a class="d-inline-block ml-2 text-muted" title="" data-placement="top" data-toggle="tooltip" href="{{ $user->linkedln}}" data-original-title="linkedln"><i class="mdi mdi-linkedin"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                    @include('partials._taskHistory', [$appliedProjects, $assignedProjects])
            </div>
          

        </div>

    </div>
@endsection
