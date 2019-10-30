@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'Posted projects'])

    @include('admin.projects._masterProjectTemp', ['projectType' => 'Posted Projects'])
@endsection
