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
                        <li class="breadcrumb-item"><a href="{{route('home')}}">Tasks</a></li>
                        <li class="breadcrumb-item active">{{$taskName}}</li>
                    </ol>
                </div>

                @if (count($projects))
                    <h5 class=" mb-3 card-header">{{count($projects)}} Task{{count($projects) > 1 ? "s" : ""}} </h5>
                    @foreach ($projects as $project)
                        <div class="card">
                            <div class="card-body">
                                <div class="col-sm-12">
                                    <a  href="{{ route('projects.show', $project->id) }} ">
                                        <p class="h4 mb-3">  {{ucfirst($project->title)}}    
                                            <small class="text-muted h6 d-block">posted {{$project->created_at->diffForHumans()}}</small>
                                        </p> 
                                        <span>
                                            <span class=" mb-1 badge badge-light">Est. Budget: NGN {{ $project->budget }}</span>
                                            <span class=" mb-1 badge badge-light">Model: {{ $project->model }}</span>
                                            <span class=" mb-1 badge badge-light">Task: {{ $project->task->name }} - {{ $project->subtask->name }}</span>
                                            <span class=" mb-1 badge badge-light">Level of experience: {{ $project->experience }}</span>
                                            <span class=" mb-1 badge badge-light">Est. start date: {{ $project->proposed_start_date }}</span>
                                         </span>
                                        
                                       
                                        <p  class="my-2 text-dark">{{str_limit($project->description, 20000) }}  </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    <h5 class="card-header mb-3">There are no job listing for this skill at the moment. Do check back</h5>
                @endif
                <span class="h5">Want to post a Task under this category? Go
                    <a href="{{ route('projects.create') }}"> here</a>
                </span>
            </div>
        </div>
    </div>
@endsection
