@extends('layouts.base')

@section('content')
  @if (session('message'))
        @include('partials.notifs')
    @endif

    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-sm-12 mb-3">

                {{-- breadcrumbs --}}
                <div class="page-title text-left w-100">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="{{route('home')}}">Tasks</a></li>
                        <li class="breadcrumb-item active">All Tasks</li>
                    </ol>
                </div>
              

                @if (count($projects))
                    <h5 class=" mb-3 card-header">{{count($projects)}} Task{{count($projects) > 1 ? "s" : ""}} </h5>
                    <div class="row">
                        @foreach ($projects as $project)
                            <div class="col-lg-5">
                                <div class="card widget-flat">
                                    <div class="card-body mt-0" style="position: relative;">
                                        <div class="float-right">
                                            <span class="h6 text-muted mt-0" title="Revenue">{{$project->created_at->diffForHumans()}}</span>
                                        </div>

                                        <a class="h5 d-block mb-1 mt-0" href="{{ route('projects.show', $project->id) }} ">{{ucfirst($project->title)}}</a>
                                        <p  class="mb-0">{{str_limit($project->description, 90) }} <a href="{{ route('projects.show', $project->id) }} ">more</a></p>

                                        <div class="row">
                                            <div class="col-sm-4 col-md-4 col-lg-12">
                                                <p class="d-block m-2">Model: <span class="mb-0 h6 text-primary">{{$project->model}}</spam> </p>
                                                <p class="d-block m-2">Proposed start date: <span class="mb-0 text-primary h6">{{$project->start_date}}</spam></p>
                                                <p class="d-block m-2">Category: <span class="mb-0 text-primary h6">{{$project->task->name}}</span> </p>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-group row mt-2 mb-0">
                                                <div class="col-md-6">
                                                    <button type="submit" class="btn btn-primary">
                                                        <a class="text-white" href="{{ route('projects.show', $project->id) }} ">Apply to Task</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <h5 class="card-header mb-3">There are no job listing for this skill at the moment. Do check back</h5>
                @endif
                <span class="h6">Want to post a Task under this category? Go
                    <a href="{{ route('projects.create') }}"> here</a>
                </span>
            </div>
        </div>
    </div>
@endsection
