@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link {{ ! is_route('profile.personal-data') ?: 'active' }}" href="{{ route('profile.personal-data') }}">Dados Pessoais</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ ! is_route('profile.security') ?: 'active' }}" href="{{ route('profile.security') }}">Segurança</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        @yield('tab-content')
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
