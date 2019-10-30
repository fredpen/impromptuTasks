@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'Cancelled projects'])

    @include('admin.projects._masterProjectTemp', ['projectType' => 'Cancelled Projects'])
@endsection
