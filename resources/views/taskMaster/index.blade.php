@extends('layouts.base')

@section('content')
    @if (session('message'))
        @include('partials.notifs')
    @endif

    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-sm-12 mb-3">

                @if (count($masters))
                    <div class="page-title text-left w-100"> {{-- breadcrumbs --}}
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{route('home')}}">Tasks</a></li>
                            <li class="breadcrumb-item active">{{$taskName}}</li>
                        </ol>
                    </div>

                    <h5 class=" mb-3 card-header">{{count($masters)}} Task Master{{count($masters) > 1 ? "s" : ""}} </h5>
                    <div class="row">
                        @foreach ($masters as $master)
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <span class="float-left m-2 mr-4">
                                            <img 
                                                src=" {{ $master->imageurl ? asset('images/' . $master->imageurl) : asset('images/basic.jpg') }}"
                                                style="height: 100px;" 
                                                alt="{{ $master->name }}" 
                                                title= "{{ $master->name }}" 
                                                class="rounded-circlej img-thumbnail"
                                            >
                                        </span>
                                        <div class="media-body">
                                    
                                            <h4 class="mt-1 mb-1">
                                                <a href=" {{ route('account.show', $master->id) }} ">{{ $master->name }} </a>
                                                <span 
                                                    class="h5">-  {{ $master->title }} 
                                                </span>
                                            </h4>
                                            <p class="font-13 text-dark">
                                                @foreach ($master->skills as $skill)
                                                    <button type="button" class="btn-rounded btn btn-info">{{$skill->name}}</button>
                                                @endforeach
                                            </p>

                                            <p class="font-13">  {{ $master->bio }} </p>
                                    
                                            <ul class="mb-0 list-inline">
                                                <li class="list-inline-item mr-3">
                                                    <h5 class="mb-1">$ 25,184</h5>
                                                    <p class="mb-0 font-13">Total Revenue</p>
                                                </li>
                                                <li class="list-inline-item">
                                                    <h5 class="mb-1">5482</h5>
                                                    <p class="mb-0 font-13">Number of Orders</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <h5 class="card-header mb-3">There are no Task Masters for this skill at the moment. Do check back</h5>
                @endif
            </div>
        </div>
    </div>
@endsection
