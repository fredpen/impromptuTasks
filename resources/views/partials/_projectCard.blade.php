

{{-- used in project.index and project show  --}}
@foreach ($projects as $project)
    @if ($project->status != 'deleted')
        <div class="card">
            <div class="card-body">
                <div class="col-sm-12">
                    <a  href="{{ route('projects.show', $project->id) }} ">
                        <p class="h4">  {{ucfirst($project->title)}}    </p> 
                        <span class=" font-14 badge badge-{{$project->color()}}">Status: {{$project->status}}</span>
                        <small class="font-14 text-muted h6 d-block">posted {{$project->created_at->diffForHumans()}}</small>
                        <p class="mb-1 text-muted font-14">
                            <span class="text-nowrap mb-2 mx-1 d-inline-block">
                                Model: <b class="text-dark text-capitalize">{{$project->model}}</b>
                            </span>

                            <span class="pr-2 text-nowrap mb-2 mx-1 d-inline-block">
                                Budget: <b class="text-dark text-capitalize"><i class="mdi mdi-currency-ngn"></i>{{$project->budget}}</b>
                            </span>

                            <span class="text-nowrap mb-2 mx-1 d-inline-block">
                                Payment: 
                                <b class="text-dark text-capitalize">{{$project->amount_paid ? "Payment Verfied" : 'Payment unverified' }}</b>
                            </span>

                            <span class="text-nowrap mb-2 mx-1 d-inline-block">
                                Proposed Start Date: <b class="text-dark text-capitalize">{{$project->proposed_start_date}}</b>
                            </span>
                        </p>
                    
                        <p  class="my-2 text-dark">{{str_limit($project->description, 20000) }}  </p>
                    </a>
                </div>
            </div>
        </div>
    @endif
@endforeach
