<?php

namespace App\Http\Requests\Profile;

use App\Rules\VerifyPassword;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ChangePasswordRequest
 * @package App\Http\Requests\Profile
 */
class ChangePasswordRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'current_password' => ['required', new VerifyPassword],
            'new_password' => ['required', 'confirmed']
        ];
    }

    public function messages()
    {
        return [
            'current_password.required' => 'O campo senha atual é obrigatório.',
            'new_password.required' => 'O campo nova senha é obrigatório.',
            'new_password.confirmed' => 'As senhas não coincidem.',
        ];
    }
}
