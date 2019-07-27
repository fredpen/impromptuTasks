@extends('layouts.admin')

@section('content')
    <div class="row mt-4">
        <div class="col-sm-4">

            @if ($errors->any())
                @include('partials.errorBag')
            @endif

            <div class="card card-body">
                <h4 class="card-title text-center">Create Roles</h4>
                <div class="card-text">

                    {!! Form::open(['method' => 'POST', 'action' => 'RolesController@store']) !!}
                        <div class="form-group mb-3 justify-content-center">
                            {!! Form::text('name', null, ['class' => 'form-control mb-3', 'placeholder' => 'Enter role name']) !!}
                            {!! Form::submit('Create Role', ['class' => 'btn btn-primary d-block mx-auto']) !!}
                        </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>

         <div class="col-sm-4">
            <div class="card card-body">
                <h4 class="card-title text-center">Edit Roles</h4>
                <div class="card-text">
                    <div class="table-responsive-sm">
                        <table class="table table-bordered table-centered mb-0">
                            <thead>
                                <tr>
                                    <th>Role Name</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if ($roles->count() > 0)
                                    @foreach ($roles as $role)
                                        <tr>
                                            <td>
                                                {!! Form::model($role, ['method' => 'PUT', 'action' =>['RolesController@update', $role->id]]) !!}
                                                    {!! Form::text('name', null, ['class' => 'form-control']) !!}
                                            </td>
                                            <td>
                                                {!! Form::submit('Update', ['class' => 'btn-sm btn btn-primary']) !!}
                                                {!! Form::close() !!}
                                            </td>
                                        </tr>
                                    @endforeach
                                @endif

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-4">
            <div class="card card-body">
                <h4 class="card-title text-center">Roles</h4>
                <div class="card-text">

                    <div class="table-responsive-sm">
                        <table class="table table-bordered table-centered mb-0">
                            <thead>
                                <tr>
                                    <th>s/n</th>
                                    <th>Role Name</th>
                                    <th class="text-center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if ($roles->count() > 0)
                                    @foreach ($roles as $role)
                                        <tr>
                                            <td>{{$role->id}}</td>
                                            <td class="text-capitalize">{{$role->name}}</td>
                                            <td style="cursor: pointer;" class="table-action text-center" onclick="deleted(this)">
                                                <i class="mdi mdi-delete"></i>
                                                {!! Form::open(['method' => 'DELETE', 'action' =>['RolesController@destroy', $role->id]]) !!}
                                                {!! Form::close() !!}
                                            </td>
                                        </tr>
                                    @endforeach
                                @endif
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>



    </div>
@endsection

@section('scripts')
    <script async="true">
        function deleted(target)
        {
            $(target).children('form').submit();
        }
    </script>
@endsection

