@extends('layouts.admin')

@section('content')
    @include('partials.jumbotron', ['pageTitle' => 'ongoing projects'])

    @include('admin.projects._masterProjectTemp', ['projectType' => 'ongoing Projects'])
@endsection
