


  <div class="card">
    <div class="card-body">
        <h5 class="header-title mb-3">Task history</h5>
        <div class="table-responsive">
            <table class="table table-hover table-centered mb-0">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th> Model </th>
                        <th>Applied on</th>
                        <th>Status</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    @if ($assignedProjects)
                        @foreach ($assignedProjects as $project)
                            <tr>
                                <td> 
                                    <a href="{{ route('projects.show', $project->id) }}">{{Str::limit($project->title, 15)}} </a>
                                </td>
                                <td>{{ucfirst($project->model)}}</td>
                                <td>{{$project->created_at->diffForHumans()}}</td>
                                <td><span class="badge badge-success">Assigned</span></td>
                                <td>NGN {{$project->budget}}</td>
                                
                            </tr>
                        @endforeach
                    @endif

                    @if ($appliedProjects)
                        @foreach ($appliedProjects as $project)
                            <tr>
                                <td> 
                                    <a href="{{ route('projects.show', $project->id) }}">{{Str::limit($project->title, 15)}} </a>
                                </td>
                                <td>{{ucfirst($project->model)}}</td>
                                <td>{{$project->created_at->diffForHumans()}}</td>
                                <td><span class="badge badge-primary">Applied</span></td>
                                <td>NGN {{$project->budget}}</td>
                            </tr>
                        @endforeach
                    @else
                        @if (Auth::id() == $user->id)
                            <h5>You have not applied to any projects. 
                                <a href="{{ route('projects.index') }}">Start applying </a>
                            </h5>
                        @else
                            <h5>Task master {{$user->name}} has not applied to any task </h5>
                        @endif
                    @endif
                </tbody>
            </table>
        </div>
    </div>
</div> 