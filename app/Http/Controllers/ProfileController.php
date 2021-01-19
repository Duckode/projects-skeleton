<?php

namespace App\Http\Controllers;

use App\Http\Requests\Profile\ChangePasswordRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;

/**
 * Class ProfileController
 * @package App\Http\Controllers
 */
class ProfileController extends Controller
{
    /**
     * @return View
     */
    public function personalData() : View
    {
        return view('profile.personal-data', [
            'user' => \Auth::user()
        ]);
    }

    /**
     * @return View
     */
    public function security() : View
    {
        return view('profile.security');
    }

    /**
     * @param ChangePasswordRequest $request
     * @return JsonResponse
     */
    public function changePassword(ChangePasswordRequest $request) : JsonResponse
    {
        $user = \Auth::user();

        $user->password = bcrypt($request->new_password);
        $user->save();

        return response()->json([], Response::HTTP_NO_CONTENT);
    }
}
