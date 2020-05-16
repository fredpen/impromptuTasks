<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Helpers\ResponseHelper;

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

        if($validator->fails()){
            return ResponseHelper::badRequest($validator->errors()->first());       
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        if($user){
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

        if($validator->fails()){
            return ResponseHelper::badRequest($validator->errors()->first());     
        }

        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials)){
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
        if ($isUser){
            $success['message'] = "Successfully logged out.";
            return ResponseHelper::sendSuccess($success);
        }
        return ResponseHelper::serverError();
    }

    //getuser
    public function getUser(Request $request)
    {
        $user = $request->user();
        if($user){
            return ResponseHelper::sendSuccess($user);
        }
        $error = "user not found";
        return $this->sendResponse($error);
    }
}
