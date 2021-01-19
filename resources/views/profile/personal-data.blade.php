@extends('layouts.profile')

@section('tab-content')
    <div class="form-row">
        <div class="col-12 col-md-6">
            <label class="col-form-label">Nome</label>
            <input type="text" disabled class="form-control" value="{{ $user->name }}">
        </div>
        <div class="col-12 col-md-6">
            <label class="col-form-label">E-Mail</label>
            <input type="text" disabled class="form-control" value="{{ $user->email }}">
        </div>
    </div>
@endsection
