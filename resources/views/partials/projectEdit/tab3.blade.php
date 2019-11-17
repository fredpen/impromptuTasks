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
    <div class="row">
        <div class="d-flex flex-wrap w-100 justify-content-between">

             <div class="card cta-box bg-primary text-white col-md-5">
                <div class="card-body">
                    <div class="text-center">
                        <h3 class="m-0 font-weight-normal cta-box-title">Make payments <b>For better and faster</b> service</h3>

                        <img class="my-3" src="{{ asset('images/report.svg') }}" width="180" alt="Generic placeholder image">

                        <br>

                        <a href="javascript:void(0);" class="btn btn-sm btn-light btn-rounded">Pay Now<i class="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
            </div>     
            
            <div class="card widget-flat col-md-3 h-170">
                <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                    <div class="col-sm-12 mb-3">
                        {!! Form::label('budget', 'Budget', ['class' => 'd-block mt-0 h4']) !!}
                        <span class="d-block text-muted h6 mb-2">How much are you willing to pay for this service in Naira 
                            <br> Amounts are in Naira (#)
                        </span>
                        <div class="d-block">
                            <input 
                                type="text"
                                class="form-control"
                                data-toggle="input-mask" 
                                data-mask-format="000,000,000,000,000,000" 
                                data-reverse="true" 
                                maxlength="22"
                                placeholder="20,000"
                                id="budget"
                                value="{{$project->budget}}"
                                onchange="updateBudget(this, 'budget')"
                            >
                        </div>
                    </div>
                </div>
            </div>

         
        </div>
    </div>

   
</div>


