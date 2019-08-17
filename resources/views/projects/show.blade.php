@extends('layouts.base')

@section('content')
this is the project show page
{{$project->model}}
@endsection
@section('scripts')

    <script src="{{ asset('js/form.js') }}"></script>
    <script src="{{ asset('js/fileupload.js') }}"></script>
@endsection
