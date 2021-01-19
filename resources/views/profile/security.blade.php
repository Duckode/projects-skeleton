@extends('layouts.profile')

@section('tab-content')
    <form id="change-password-form">
        <div class="form-row">
            <div class="col-12">
                <label class="col-form-label">Senha Atual</label>
                <input type="password" name="current_password" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label class="col-form-label">Nova Senha</label>
                <input type="password" name="new_password" class="form-control">
            </div>
            <div class="col-12 col-md-6">
                <label class="col-form-label">Confirmação de Nova Senha</label>
                <input type="password" name="new_password_confirmation" class="form-control">
            </div>
        </div>
        <div class="form-row mt-3">
            <div class="col-12">
                <button class="btn btn-primary btn-block">Salvar</button>
            </div>
        </div>
    </form>
@endsection

@section('js')
    <script src="{{ asset('js/profile/security.js') }}"></script>
@endsection
