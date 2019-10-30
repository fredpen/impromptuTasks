@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'Completed projects'])

    @include('admin.projects._masterProjectTemp', ['projectType' => 'Completed Projects'])
@endsection
