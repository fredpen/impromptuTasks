@extends('layouts.base')

@section('content')
<div class="container">
    @if (session('message'))
        @include('partials.notifs')
    @endif

    <div class="mt-4 row flex-wrap justify-content-center">
        <div class="d-flex flex-wrap col-sm-12 justify-content-between mb-4">
            
            <div class="card widget-flat col-md-3 d-none d-md-block">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        <label class="d-block mt-0 h4" for="budget">Budget</label>
                        <span class="d-block text-muted mb-2">Budget amount for this service in Naira </span>
                        
                        <div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                            <span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend">
                                <span class="d-block input-group-text">NGN {{ $project->budget }}</span>
                            </span>
                        </div>
                        <div class="mt-2">
                            <p class="text-danger">After making the payment, an invoice will be sent to you for your transaction and one of Impromptu Tasks agent will be in contact with you immediately</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card cta-box bg-primary text-white col-md-4">
                <div class="card-body">
                    <div class="text-center">
                        <h3 class="m-0 font-weight-normal cta-box-title">Task masters respond better to tasks with verified  payments</h3>
                        <img class="my-3" src="{{ asset('images/report.svg') }}" width="180" alt="Generic placeholder image">
                        <br>

                        <button onclick="submitForm('paymentForm')" class="btn btn-md btn-light btn-rounded">Pay NGN {{ $project->budget }}</button>
                    </div>
                </div>
            </div> 

            <div class="card widget-flat col-md-4">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <ul class="text-danger ">
                        <li>Funds are not released to task masters until task is completed or an agreed milestone is reached.</li>
                        <li>In rare scenerio where we could not find a task master for your task, your money is fully refunded.</li>
                        <li>You can always come back to this page to make payment; However, payment must be made before task commences</li>
                    </ul>
                    <p class="h5">To better understand how our payment system works kindly read through 
                        <a href="#">this section</a> of our Terms and Agreement
                    </p>
                </div>
            </div>

            {!! Form::open(['method' => 'POST', 'action' => 'RaveController@initialize', 'id' => 'paymentForm']) !!}
                <input type="hidden" name="payment_method" value="both" /> 
                <input type="hidden" name="amount" value="{{ str_replace(',', '', $project->budget)}}" /> 
                <input type="hidden" name="description" value="{{$project->title}}" /> 
                <input type="hidden" name="country" value="{{$project->country_id ? $project->country->name : 'NG'}}" /> 
                <input type="hidden" name="currency" value="NGN" /> 
                <input type="hidden" name="email" value="{{Auth::user()->email}}" /> 
                <input type="hidden" name="firstname" value="{{explode(" ", Auth::user()->name)[0]}}" /> 
                <input type="hidden" name="lastname" value="{{explode(" ", Auth::user()->name)[1]}}" /> 
                <input type="hidden" name="metadata" value="{{ json_encode($metaData) }}" > 
                <input type="hidden" name="phonenumber" value="{{Auth::user()->phone_number}}" />
                <input type="hidden" name="logo" value="https://pbs.twimg.com/profile_images/915859962554929153/jnVxGxVj.jpg" /> 
                <input type="hidden" name="title" value="Impromptu Tasks" /> 
            {!! Form::close() !!}
        </div>
    </div>
    </div>

    
@endsection


@section('scripts')
<script>
    var project_id = {{ $project-> id}};
    function submitForm(element)
    {
        return $('#' + element).submit();
    }
</script>
@endsection
