@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'All projects'])

    @include('admin.projects._masterProjectTemp', ['projectType' => 'All Projects'])
@endsection

