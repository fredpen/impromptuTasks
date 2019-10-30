@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'Created projects'])

    @include('admin.projects._masterProjectTemp', ['projectType' => 'Created Projects'])
@endsection
