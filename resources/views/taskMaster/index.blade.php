@extends('layouts.base')

@section('content')
    @if (session('message'))
        @include('partials.notifs')
    @endif

    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-sm-12 mb-3">
                  
                @if (count($task[0]->masters))
                    <div class="page-title text-left w-100"> {{-- breadcrumbs --}}
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{route('home')}}">Tasks</a></li>
                            <li class="breadcrumb-item active">{{$taskName}} - Task Masters</li>
                        </ol>
                    </div>

                    <div class="row">
                        @foreach ($task[0]->masters as $master)
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media mt-2">
                                            <img 
                                                class="mx-3 avatar-md rounded-circle"  
                                                alt="{{ $master->name }}" 
                                                title= "{{ $master->name }}" 
                                                src=" {{ $master->imageurl ? asset('images/' . $master->imageurl) : asset('images/basic.jpg') }}" 
                                            >

                                            <div class="media-body">
                                                <h5 class="mt-0"> 
                                                    <a href=" {{ route('account.show', $master->id) }} ">{{ $master->name }} </a>
                                                    <span class="d-block h5"  class=""><i class="mdi mdi-briefcase-account"></i> {{ $master->title }}     </span>
                                                    <span class="d-block"  class=""><i class="mdi mdi-flag"></i> {{ $master->region->name . ", " . $master->country->name }}     </span>
                                                </h5>
                                            </div>
                                        </div>
                                        <hr>

                                        <div class="media-body col-sm-12 mt-3">
                                            <p class="font-13 text-dark mb-2">
                                                @foreach ($master->skills as $skill)
                                                    <span 
                                                        class="mb-2 badge badge-light badge-pill"
                                                        style="font-size:100%">
                                                        {{ $skill->name }}
                                                    </span>
                                                @endforeach
                                            </p>

                                            <p class="font-13"> {{ Str::limit($master->bio, 300) }}</p>
                                            <hr>
                                    
                                            <ul class="mb-0 list-inline">
                                                <li class="list-inline-item mr-3">
                                                    <h5 class="mb-1"> NGN {{ $master->revenue ?  $master->revenue : "0"}}</h5>
                                                    <p class="mb-0 font-13">Total Revenue</p>
                                                </li>
                                                <li class="list-inline-item">
                                                    <h5 class="mb-1"> {{ $master->orders_in ?  $master->orders_in : "0"}}</h5>
                                                    <p class="mb-0 font-13">Number of Orders</p>
                                                </li>
                                            </ul>
                                            
                                            <a href="{{ route('account.show', $master->id) }}" class="mt-3 btn btn-primary">View {{$master->name}}'s Profile</a>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <div class="page-title text-left w-100"> {{-- breadcrumbs --}}
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="{{route('home')}}">Back</a></li>
                        </ol>
                    </div>
                    <h5 class="card-header mb-3">There are no Task Masters for this skill at the moment. Do check back</h5>
                @endif
            </div>
        </div>
    </div>
@endsection
