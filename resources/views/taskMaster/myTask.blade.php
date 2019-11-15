@extends('layouts.base')

@section('content')
<div class="container">


    @if ($errors->any())
        @include('partials.notifs')
    @endif

    @if (session('message'))
        @include('partials.notifs')
    @endif

    <div class="row mt-2">
        <div class="col-lg-4">
            <div class="card cta-box bg-primary text-white mt-1">
                <div class="card-body">
                    <div class="text-center">
                        <h6 class="m-0 font-weight-light cta-box-title">Ready to earn? </h6>
                        <button type="button" class="mt-2 btn btn-sm btn-light btn-rounded" data-toggle="modal" data-target="#fredTaskMode">Start Applying</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-sm-12 mb-3">
            @if (count($appliedProjects))
                <h5 class="card-header">{{count($appliedProjects)}} Task{{count($appliedProjects) > 1 ? "s" : ""}} found</h5>
            @else
                <h5 class="card-header">You do not have any task at the moment, Start applying</h5>
            @endif
        </div>

        @if (count($appliedProjects))
            @foreach ($appliedProjects as $project)
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
            @endforeach
        @endif
    </div>
@endsection

@section('scripts')
    
@endsection
