<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Helpers\ResponseHelper;
use Illuminate\Support\Facades\Config;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'role_id' => ['required'],
            'phone_number' => ['required', 'max:15', 'unique:users'],
        ]);

        if ($validator->fails()) {
            return ResponseHelper::badRequest($validator->errors()->first());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        if ($user) {
            $success['token'] =  $user->createToken('token')->accessToken;
            $success['message'] = "Registration successfull..";
            return ResponseHelper::sendSuccess($success);
        }
        return ResponseHelper::serverError();
    }

    //login
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return ResponseHelper::badRequest($validator->errors()->first());
        }

        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return ResponseHelper::unAuthorised();
        }
        $user = $request->user();
        $success['token'] =  $user->createToken('token')->accessToken;
        return ResponseHelper::sendSuccess($success);
    }

    //logout
    public function logout(Request $request)
    {
        $isUser = $request->user()->token()->revoke();
        if ($isUser) {
            $success['message'] = "Successfully logged out.";
            return ResponseHelper::sendSuccess($success);
        }
        return ResponseHelper::serverError();
    }

    //getuser
    public function getUser(Request $request)
    {
        return ResponseHelper::sendSuccess($request->user());
    }

    //update User
    public function updateUser(Request $request)
    {
        $unallowedFields = $this->validateUpdateRequest($request->all());
        if (count($unallowedFields)) {
            return ResponseHelper::badRequest("You can not update $unallowedFields[0]");
        }

        $user = $request->user();
        $update = $user->update($request->all());
        if ($update) {
            return ResponseHelper::sendSuccess($user);
        }
        return ResponseHelper::serverError();
    }

    private function validateUpdateRequest($request)
    {
        $allowedFields = Config::get('constants.userUpdate');
        $incomingFields = array_keys($request);
        $notAllowed = array_filter($incomingFields, function ($incomingField) use ($allowedFields) {
            return !in_array($incomingField, $allowedFields);
        });
        return array_values($notAllowed);
    }
}
