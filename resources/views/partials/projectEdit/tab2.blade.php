
<div class="tab-pane" id="basictab2">
    <div class="row">
        <div class="card widget-fla500t col-sm-12">
            <div class="card-body pt-3 pb-0 px-0" style="position: relative;">
                <div class="col-sm-12">
                    {!! Form::label('title', 'Describe your Task as clearly as possible', ['class' => 'd-block mt-0 h4']) !!}
                    <h6 class="text d-block mt-2">A good describtion have</h6>
                    <ul class="text-muted h6 mb-3">
                        <li>a task deliverable</li>
                        <li>Anything unique about the task</li>
                        <li>What you are looking for in a Task Master</li>
                    </ul>
                    <textarea id="description" onchange="updateProject(this, 'description')" data-toggle="maxlength" class="mb-3 form-control" data-threshold="5000" maxlength="5000" rows="5" placeholder="This textarea has a limit of 5000 chars.">{{$project->description}}</textarea>
                </div>
            </div>
        </div>
    </div>
</div>
