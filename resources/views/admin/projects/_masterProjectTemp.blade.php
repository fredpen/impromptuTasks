    <div class="row mt-4">
        <div class="col-sm-12">
            <div class="card card-body p-1">

                <div class="page-title-right">
                    <ol class="breadcrumb m-0 p-0">
                        <li class="breadcrumb-item h5"><a href="{{ route('project.all') }}">Projects</a></li>
                        <li class="breadcrumb-item active h5">{{ $projectType }}</li>
                    </ol>
                </div>

                <div class="card-text">
                    <div class="table-responsive-sm">
                        @if ($projects->count() > 0)
                            <table class="table table-bordered table-centered mb-0 mt-3">
                                <thead class="thead-dark">
                                    <tr class="h6 text-uppercase">
                                        <th> Project Creator </th>
                                        <th title="click to see full details"> Project Detail </th>
                                        <th> Status</th>
                                        <th> Created on</th>
                                        <th> Updated on</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($projects as $project)
                                        <tr>
                                            <td class="h6"><a href="{{ route('account.show', (int)$project->owner['id']) }}">{{ $project->owner['name'] }}</a></td>
                                            <td title="click to see full details" class="h6"><a  href="{{ route('project.adminShow', $project->id) }}">{{ $project->title }}</a></td>
                                            <td class="h6"> {{ $project->status }} </td>
                                            <td class="h6"> {{ $project->updated_at->diffForHumans() }}</td>
                                            <td class="h6"> {{ $project->created_at->diffForHumans() }}</td>
                                            @if ($project->status == "posted")
                                                <td><a target="_blank" href="{{ route('projects.show', $project->id) }}">Live <br>Preview  </a></td>
                                            @else
                                                    <td class="h6">No preview</td>
                                            @endif

                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        @else
                            <h5 class="card-header mb-3 mt-3">There are no {{$projectType}} at the moment.</h5>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center my-4">
        {{ $projects->onEachSide(5)->links() }}
    </div>

