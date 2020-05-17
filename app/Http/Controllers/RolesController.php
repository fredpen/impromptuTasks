<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use Illuminate\Support\Facades\Config;

class RolesController extends Controller
{
    public function index()
    {
        $roles = Config::get('constants.roles');
        return count($roles) ? ResponseHelper::sendSuccess($roles) : ResponseHelper::serverError();
    }
}
