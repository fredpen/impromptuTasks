<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Active
{
    private $message = "Kindly Complete your profile to have full access - Apply to Tasks, Post Tasks...";
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
        if (!$user->isActive())  return redirect()->action('AccountController@edit', $request->user_id)->with("message", $this->message);
        if ($user->status() === 2)  abort('402'); //incomplete reg
        if ($user->status() === 4)  abort('401'); //your account has been deactivated
        return $next($request);    }
}
