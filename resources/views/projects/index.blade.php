@extends('layouts.base')

@section('content')
    @if (session('message'))
        @include('partials.notifs')
    @endif

    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-sm-12 mb-3">
                
                <div class="page-title text-left w-100">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="{{route('home')}}">Home</a></li>
                        <li class="text-capitalize breadcrumb-item">All Tasks</li>
                    </ol>
                </div>
                
                @if (count($projects))
                    <h5 class=" mb-3 card-header">{{count($projects)}} Task{{count($projects) > 1 ? "s" : ""}} </h5>
                    @include('partials._projectCard', $projects) 
                    <div class="row justify-content-center my-4">{{ $projects->links() }}</div>
                @else
                    <h5 class="card-header mb-3">There are no job listing for this skill at the moment. But we find some gigs that might interet you</h5>
                @endif
            </div>

            <div class="col-sm-12 mb-3">
                <span class="h5">Want to post a Task under this category? Go
                    <a href="{{ route('projects.create') }}"> here</a>
                </span>
            </div>
        </div>
    </div>
@endsection
