@extends('layouts.admin')

<style>

</style>

@section('content')
    <ol class="breadcrumb">
        <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item">User</li>
    </ol>

    @include('partials.jumbotron', ['pageTitle' => 'user'])

    <div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>Becareful when editing this page, this should only be done on rare cases</p>
                </div>

                {!! Form::model($user, ['method' => 'PUT', 'action' => ['AdminUsersController@update', $user->id]]) !!}
                    <div class="form-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    {!! Form::text('name', null, ['class'=> 'form-control', 'required' => true]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::hidden('role_id', null, []) !!}
                                    {!! Form::text('role', $user->role->name, ['class'=> 'form-control', 'disabled' => true]) !!}
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    {!! Form::text('email', null, ['class'=> 'form-control', 'required' => true]) !!}
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Confirm Password *" value=""/>
                                </div>
                            </div>
                            {!! Form::submit('Submit', ['class' => 'btnSubmit']) !!}
                        </div>
                    </div>
                {!! Form::close() !!}
            </div>
        </div>
@endsection

@section('scripts')
@endsection
