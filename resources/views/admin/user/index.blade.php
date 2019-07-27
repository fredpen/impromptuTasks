@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'Users'])

    <div class="row mt-4">
        <div class="col-sm-12">
            <div class="card card-body">
                <div class="card-text">
                    <div class="table-responsive-sm">
                        <table class="table table-bordered table-centered mb-0">
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Email</th>
                                    {{-- <th> Role</th> --}}
                                    <th> Created</th>
                                    <th> Updated</th>
                                    <th> Activate/<br>Deactivate</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if ($users->count() > 0)
                                    @foreach ($users as $user)
                                        <tr>
                                            <td><a href="{{ route('users.show', $user->id) }}">{{ $user->name }}</a></td>
                                            <td> {{ $user->email }} </td>
                                            {{-- <td> {{ $user->role->name }} </td> --}}
                                            <td> {{ $user->updated_at->diffForHumans() }}</td>
                                            <td> {{ $user->created_at->diffForHumans() }}</td>
                                            <td>
                                                {!! Form::open(['method' => 'PUT', 'action' => ['UsersController@update', $user->id]]) !!}
                                                        <input onchange="this.form.submit()" type="checkbox" name="isActive" {{ $user->isActive ? 'checked' : '' }}>
                                                {!! Form::close() !!}
                                            </td>

                                            <td style="cursor: pointer;" class="table-action text-center" onclick="deleted(this)">
                                                <i class="mdi mdi-delete"></i>
                                                {!! Form::open(['method' => 'DELETE', 'action' =>['UsersController@destroy', $user->id]]) !!}
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
