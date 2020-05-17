<?php

use Illuminate\Support\Facades\Route;

// auth
Route::post('/auth/register', 'AuthController@signup')->name('register'); 
Route::post('/auth/login', 'AuthController@login')->name('login'); 
Route::group(['middleware' => 'auth:api'], function(){
    Route::get('auth/logout', 'AuthController@logout');
    Route::get('auth/getUser', 'AuthController@getUser');
});

// tasks 
Route::group(['prefix' => 'task', 'name' => 'task'], function(){
    
    Route::get('all-with-subtasks', 'TasksController@taskWithSubTasks')->name('taskWithSubTasks');
    Route::get('all', 'TasksController@index')->name('all');
    Route::get('/{taskId}/delete', 'TasksController@delete')->name('delete')->middleware(['auth:api', 'isAdmin']);;
    Route::get('/{taskId}/show', 'TasksController@show')->name('show');
    Route::post('store', 'TasksController@store')->name('store')->middleware(['auth:api', 'isAdmin']);
    Route::post('/{taskId}/update', 'TasksController@update')->name('update')->middleware(['auth:api', 'isAdmin']);
});

// subtasks
Route::group(['prefix' => 'subTask', 'name' => 'subTask'], function(){
    
    Route::get('all', 'SubTaskController@index')->name('all');
    Route::get('/{taskId}/delete', 'SubTaskController@delete')->name('delete')->middleware(['auth:api', 'isAdmin']);;
    Route::get('/{taskId}/show', 'SubTaskController@show')->name('show');
    Route::post('store', 'SubTaskController@store')->name('store')->middleware(['auth:api', 'isAdmin']);
    Route::post('/{taskId}/update', 'SubTaskController@update')->name('update')->middleware(['auth:api', 'isAdmin']);
});

// Projects
Route::group(['prefix' => 'project', 'name' => 'project'], function(){
    
    Route::get('all', 'SubTaskController@index')->name('all');
    Route::get('/{taskId}/delete', 'SubTaskController@delete')->name('delete')->middleware(['auth:api', 'isAdmin']);;
    Route::get('/{taskId}/show', 'SubTaskController@show')->name('show');
    Route::post('store', 'SubTaskController@store')->name('store')->middleware(['auth:api', 'isAdmin']);
    Route::post('/{taskId}/update', 'SubTaskController@update')->name('update')->middleware(['auth:api', 'isAdmin']);
});



// Route::resources([
//     'tasks' => 'TasksController',
//     'account' => 'AccountController',
//     'projects' => 'ProjectController',
//     'admin/countries' => 'CountryController',
//     'admin/regions' => 'RegionController',
//     'admin/cities' => 'CityController'
// ]);



///////////////////////////////////////////////////////////////////////

// Route::group(
//     ['middleware' => ['auth', 'verified', 'isActive']], function () {
//         Route::resource('project/photos', 'ProjectphotoController');
//         Route::put('project/ajax/{id}', 'ProjectController@ajax')->name('project.ajax');
//     }
// );


// Route::get('/', 'HomeController@index')->name('home');
// Route::get('/welcome', 'HomeController@welcome')->name('welcome'); // redirect after signing in


// // routes for outside users interacting with projects
// Route::get('/projects/task/{task}/show', 'ProjectshowController@show')->name('project.usershow'); // task show view for users
// Route::post('/projects/{project}/apply', 'ProjectshowController@apply')->name('project.apply'); // task show view for users
// Route::get('/project/{projectAssignedUser}/accept', 'ProjectshowController@accept')->name('project.accept');



    
    
//     Route::get('notifications', 'AccountController@notifications')->name('notifications')->middleware('auth'); //for notifications
//     Route::get('myTasks', 'AccountController@myTasks')->name('myTasks')->middleware('auth');
//     Route::get('region/show/ajax/{id}', 'RegionController@showAjax');//country ajax to show regions
//     Route::get('city/show/ajax/{id}', 'CityController@showAjax');//country ajax to show city
    
    
    
    
//     // route group for chnaging status of projects
//     Route::name('project.')->group(function () {
//         Route::get('projectstatus/{project}/completed', 'ProjectStatusController@completed')->name('complete');
//         Route::get('projectstatus/{project}/live', 'ProjectStatusController@live')->name('live');
//         Route::get('projectstatus/{project}/cancelled', 'ProjectStatusController@cancelled')->name('cancel');
//         Route::get('projectstatus/{project}/posted', 'ProjectStatusController@posted')->name('post');
//     });
    
//     Route::post('/pay', 'RaveController@initialize')->name('pay');
//     Route::post('/rave/callback', 'RaveController@callback')->name('callback');
//     Route::get('/{project}/payment', 'RaveController@payment')->name('payment');
    