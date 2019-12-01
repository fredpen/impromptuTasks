<div id="fredExperienceModal" class="modal fade" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-top">
        <div class="modal-content">
            <div class="modal-header modal-colored-header bg-primary">
                <h4 class="modal-title" id="primary-header-modalLabel">Level of Expertise</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div class="col-12 my-3">
                    <select onchange="updateExperience(this, 'experience')" 
                        id="experience" 
                        name="experience" 
                        class="form-control select2 select2-hidden-accessible form-control" 
                        data-toggle="select2">
                        <option>Kindly Make a Selection</option>
                        @foreach ($expertise as $expert)
                            <option {{ $project->experience  == $expert ?  "selected" : "" }} value="{{$expert}}">{{$expert}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
        


<div class="tab-pane" id="basictab3">
    <div class="row flex-wrap justify-content-center">
        <div class="d-flex flex-wrap col-sm-12 justify-content-between mb-4">
           
            <div class="card widget-flat col-md-3">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('budget', 'Budget', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6 mb-2">Enter the amount you are willing to pay for this service in Naira </span>
                        
                        
                        <div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                            <span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend">
                                <span class="input-group-text">NGN</span>
                            </span>
                            <input 
                                type="text"
                                class="form-control"
                                data-toggle="input-mask" 
                                data-mask-format="000,000,000,000,000,000" 
                                data-reverse="true" 
                                maxlength="18"
                                placeholder="200,000"
                                id="budget"
                                value="{{$project->budget}}"
                                onchange="updateBudget(this, 'budget')"
                            >
                        </div>
                        <div class="mt-2">
                            <p class="text-danger">You can not change your budget after a task master has picked up the task</p>
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

                        <button onclick="submitForm('paymentForm')" class="btn btn-sm btn-light btn-rounded">Pay Now<i class="mdi mdi-arrow-right"></i></button>
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
                <input type="hidden" name="amount" value="{{ str_replace(',', '', $project->budget)}}" /> 
                <input type="hidden" name="payment_method" value="both" /> 
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
            </form>
        </div>
    </div>
</div>

