<div class="tab-pane" id="basictab4">
    <div class="row">

        @if ($project->photos->count())
            <div class="card widget-flat col-md-12 mb-2">
                <div class="card-body mb-3 pb-0 px-0" style="position: relative;">
                <h5 class="text-muted">Attached Document{{$project->photos->count() == 1 ? "" : "s"}}</h5>
                    <div class="card mt-1 mb-0 shadow-none">
                        <div class="p-2">
                            <div class="row align-items-center">
                                @foreach ($project->photos as $key => $photo)
                                    <div id="fileParent" class="col-sm-12 d-flex justify-content-between border-bottom">
                                        <span class="h5">
                                            <a href="{{asset('images/'.$photo->url)}}" download>Supporting Document {{$key + 1}}  <i class="mdi mdi-download"></i></a>
                                        </span>

                                        <i onclick="deleteFile(this, {{$photo->id}})" class="mdi mx-2 h4 mdi-delete pointer text-danger"></i>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endif

    </div>
</div>


