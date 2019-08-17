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
        $isActive = Auth::User()->isActive;
        if ($isActive === 0) {
            abort('402'); //incomplete reg
        } elseif ($isActive === 2) {
            abort('401'); //your account has been deactivated
        }

        return $next($request);
    }
}

