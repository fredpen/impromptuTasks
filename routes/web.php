<?php


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes(['verify' => true]);

Route::get('/', 'HomeController@index')->name('home');
Route::get('/welcome', 'HomeController@welcome')->name('welcome'); // redirect after signing in

Route::resource('account', 'AccountController');
Route::resource('regions', 'RegionController');
Route::resource('cities', 'CityController');
Route::resource('projects', 'ProjectController');

Route::group(
    ['middleware' => ['auth', 'verified', 'isActive']], function () {
        Route::resource('project/photos', 'ProjectphotoController');
        Route::put('project/ajax/{id}', 'ProjectController@ajax')->name('project.ajax');
    }
);

Route::group(
    ['middleware' => ['auth', 'verified', 'isAdmin'] ], function () {
        Route::get('/admin', 'RolesController@create')->name('admin.home');
        Route::resource('admin/users', 'AdminUsersController');
        Route::resource('admin/tasks', 'TasksController');
        Route::resource('admin/subtasks', 'SubTaskController');
        Route::resource('admin/roles', 'RolesController');
    }
);
