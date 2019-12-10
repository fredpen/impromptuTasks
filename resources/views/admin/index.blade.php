@extends('layouts.admin')

@section('content')
    <div id="full_width_containekr">
        <div class="jumbotron jumbotron-fluid bg-secondary text-white p-3">
            <div class="container">
                <h1 class="display-5">Impromptu Tasks Dashboard.</h1>
                <h3 class="display-6">Monitor every activity of the app at real time.</h3>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">

        <div class="col-lg-3">
            <div class="card">
                <div class="card-body">
                    <span class="float-left m-2 mr-4">
                        <img 
                            src="{{ Auth::User()->imageurl ? asset('images/'.Auth::User()->imageurl)  : asset('images/basic.jpg') }}" 
                            alt="{{Auth::User()->name}}" class="rounded-circle"
                            style="height: 100px;"
                            class="rounded-circle img-thumbnail"
                        >
                    </span>
                    <div class="media-body">
                        <h4 class="mt-1 mb-1">{{Auth::user()->name}}</h4>
                        <p class="font-13">logged in as administrator</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3">
            <div class="card widget-flat">
                <div class="card-body">
                    <div class="float-right">
                            <i class="mdi mdi-currency-usd widget-icon  rounded-circle"></i>
                    </div>
                    <h5 class="text-muted font-weight-normal mt-0" title="Revenue">Revenue</h5>
                    <h3 class="mt-3 mb-3"># {{ $chargedAmount }}</h3>
                    <p class="mb-0 text-muted">
                        <span class="badge badge-info mr-1">
                            <i class="mdi mdi-arrow-down-bold"></i> 7.00%</span>
                        <span class="text-nowrap">Since last month</span>
                    </p>
                </div>
            </div>
        </div> <!-- end col-->

        <div class="col-lg-3">
            <div class="card widget-flat">
                <div class="card-body">
                    <div class="float-right">
                        <i class="widget-icon  mdi mdi-account-multiple widget-icon bg-white text-success"></i>
                    </div>
                    <h5 class="text-muted font-weight-normal mt-0" title="Growth">Users Growth</h5>
                    <h3 class="mt-3 mb-3">{{ $totalUsers }}</h3>
                    <p class="mb-0 text-muted">
                        <span class="text-success mr-2">
                            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
                        <span class="text-nowrap">Since last month</span>
                    </p>
                </div>
            </div>
        </div> <!-- end col-->

        <div class="col-lg-3">
            <div class="card widget-flat">
                <div class="card-body">
                    <div class="float-right">
                        <i class="widget-icon  mdi mdi-account-multiple widget-icon bg-white text-success"></i>
                    </div>
                    <h5 class="text-muted font-weight-normal mt-0" title="Growth">Total Projects</h5>
                    <h3 class="mt-3 mb-3">{{ $totalProjects }}</h3>
                    <p class="mb-0 text-muted">
                        <span class="text-success mr-2">
                            <i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
                        <span class="text-nowrap">Since last month</span>
                    </p>
                </div>
            </div>
        </div> 
        
    </div>
@endsection
