<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Active
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();
        if (!$user->isActive())  abort('402'); //incomplete reg
        if ($user->status() === 2)  abort('402'); //incomplete reg
        if ($user->status() === 4)  abort('401'); //your account has been deactivated
        return $next($request);    }
}

