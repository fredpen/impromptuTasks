@extends('layouts.base')
@section('scripts')
    <script src="{{ asset('js/form.js') }}"></script>
    <script>var project_id = {{ $project-> id}};</script>
@endsection

@section('content')
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-8">
                <!-- project card -->
                <div class="card d-block">
                    <div class="card-body">
                        <div class="dropdown float-right">
                            <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                <i class="dripicons-dots-3"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-142px, 20px, 0px);">
                                <a href="javascript:void(0);" class="dropdown-item"><i class="mdi mdi-pencil mr-1"></i>Apply</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="mdi mdi-delete mr-1"></i>Report Task</a>
                                <a href="javascript:void(0);" class="dropdown-item"><i class="mdi mdi-email-outline mr-1"></i>Share</a>
                            </div>
                        </div>
                        <!-- project title-->
                        <h3 class="mt-0">{{ ucfirst($project->title)}}</h3>
                        <span class="h6 text-dark">Posted On: {{$project->posted_on}}</span>

                        <div>
                            <span class="badge badge-secondary mb-3"> {{$project->task->name}}</span>
                            <span class="badge badge-secondary mb-3"> {{$project->subtask->name}}</span>
                            <span class="badge badge-secondary mb-3"> {{$project->model}}</span>
                        </div>



                        <h5>Task Overview:</h5>
                        <p class="text-muted mb-2"> {{$project->description}} </p>

                        <div class="row">
                            <div class="col-md-4">
                                <div class="mb-4">
                                    <h5>Number of Task master needed</h5>
                                    <p> {{ ucfirst($project->num_of_taskMaster)}} </p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Proposed Start Date</h5>
                                    <p> {{$project->start_date}} </p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Duration</h5>
                                    <p> {{$project->duration}} </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Posted On</h5>
                                    <p> {{$project->posted_on}} </p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Budget</h5>
                                    <p>$15,800</p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="mb-3">
                                    <h5>Task Model</h5>
                                    <p> {{ ucfirst($project->model)}} </p>
                                </div>
                            </div>

                            @if ($project->model == "onsite")
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <h5>Task Location</h5>
                                        <p> {{ ucfirst($project->location . ", " . $project->city->name . ", " . $project->region->name)}} </p>
                                    </div>
                                </div>
                            @endif
                        </div>

                        <div>
                            <h5>Tags:</h5>
                            @foreach ($project->task->subtasks as $subtask)
                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="{{$subtask->name}}" class="d-inline-block">
                            {{$subtask->name}}</a>
                            @endforeach

                        </div>

                        <div class="d-flex flex-row-reverse mt-5 mb-1">
                            <button type="button" class="btn btn-md btn-primary">Apply to Task</button>
                        </div>
                    </div> <!-- end card-body-->
                </div> <!-- end card-->



                <div class="card">
                    <div class="card-body">
                        <h4 class="mt-0 mb-3">Comments (258)</h4>

                        <textarea class="form-control form-control-light mb-2" placeholder="Write message" id="example-textarea" rows="3"></textarea>
                            <div class="text-right">
                                <div class="btn-group mb-2">
                                    <button type="button" class="btn btn-link btn-sm text-muted font-18"><i class="dripicons-paperclip"></i></button>
                                </div>
                                <div class="btn-group mb-2 ml-2">
                                    <button type="button" class="btn btn-primary btn-sm">Submit</button>
                                </div>
                            </div>

                            <div class="media mt-2">
                                <img class="mr-3 avatar-sm rounded-circle" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="mt-0">Jeremy Tomlinson</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                    in faucibus.

                                    <div class="media mt-3">
                                        <a class="pr-3" href="#">
                                            <img src="assets/images/users/avatar-4.jpg" class="avatar-sm rounded-circle" alt="Generic placeholder image">
                                        </a>
                                        <div class="media-body">
                                            <h5 class="mt-0">Kathleen Thomas</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center mt-2">
                                <a href="javascript:void(0);" class="text-danger">Load more </a>
                            </div>
                    </div> <!-- end card-body-->
                </div>
                <!-- end card-->
            </div> <!-- end col -->

            <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Files</h5>

                        @if (count($project->photos) > 0)
                            @foreach ($project->photos as $key => $photo)
                                <div class="card mb-1 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title rounded">
                                                        {{-- {{ $ext = explode($photo->url, ".") }} --}}
                                                        {{-- {{$photo->url}} --}}
                                                        .ZIP
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="{{asset('images/'.$photo->url)}}" target="_blank" download>Supporting Document {{$key + 1}} </a>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="{{ asset('images/' . $photo->url) }}" download class="btn btn-link btn-lg text-muted">
                                                    <i class="dripicons-download"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @else
                            <span class="h6">No additional documents for this task</span>
                        @endif
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Progress</h5>
                        <div class="mt-3 chartjs-chart" style="height: 320px;"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                            <canvas id="line-chart-example" width="216" class="chartjs-render-monitor" style="display: block; width: 216px; height: 320px;" height="320"></canvas>
                        </div>
                    </div>
                </div>
                <!-- end card-->


            </div>
        </div>
    </div>
@endsection

