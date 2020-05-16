<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/auth/register', 'AuthController@signup')->name('register'); 
Route::post('/auth/login', 'AuthController@login')->name('login'); 

Route::resources([
    'account' => 'AccountController',
    'projects' => 'ProjectController',
    'admin/countries' => 'CountryController',
    'admin/regions' => 'RegionController',
    'admin/cities' => 'CityController'
]);

Route::group(['middleware' => 'auth:api'], function(){
    
    // Auth
    
    Route::get('auth/getUser', 'AuthController@getUser');

    // Tasks

});


///////////////////////////////////////////////////////////////////////

Route::group(
    ['middleware' => ['auth', 'verified', 'isActive']], function () {
        Route::resource('project/photos', 'ProjectphotoController');
        Route::put('project/ajax/{id}', 'ProjectController@ajax')->name('project.ajax');
    }
);


Route::get('/', 'HomeController@index')->name('home');
Route::get('/welcome', 'HomeController@welcome')->name('welcome'); // redirect after signing in


// routes for outside users interacting with projects
Route::get('/projects/task/{task}/show', 'ProjectshowController@show')->name('project.usershow'); // task show view for users
Route::post('/projects/{project}/apply', 'ProjectshowController@apply')->name('project.apply'); // task show view for users
Route::get('/project/{projectAssignedUser}/accept', 'ProjectshowController@accept')->name('project.accept');



    
    
    Route::get('notifications', 'AccountController@notifications')->name('notifications')->middleware('auth'); //for notifications
    Route::get('myTasks', 'AccountController@myTasks')->name('myTasks')->middleware('auth');
    Route::get('region/show/ajax/{id}', 'RegionController@showAjax');//country ajax to show regions
    Route::get('city/show/ajax/{id}', 'CityController@showAjax');//country ajax to show city
    
    
    
    
    // route group for chnaging status of projects
    Route::name('project.')->group(function () {
        Route::get('projectstatus/{project}/completed', 'ProjectStatusController@completed')->name('complete');
        Route::get('projectstatus/{project}/live', 'ProjectStatusController@live')->name('live');
        Route::get('projectstatus/{project}/cancelled', 'ProjectStatusController@cancelled')->name('cancel');
        Route::get('projectstatus/{project}/posted', 'ProjectStatusController@posted')->name('post');
    });
    
    Route::post('/pay', 'RaveController@initialize')->name('pay');
    Route::post('/rave/callback', 'RaveController@callback')->name('callback');
    Route::get('/{project}/payment', 'RaveController@payment')->name('payment');
    