<?php
use App\Country;
use App\Region;

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
Route::get('/admin', 'RolesController@create')->name('admin.home');

// testing the location
// Route::get("/location", function(){
//     $home = Region::findOrFail(100);
//     $home = Country::findOrFail(30);
//     return $home->regions->first()->cities;
// });

Route::resource('account', 'AccountController');

Route::resource('admin/users', 'AdminUsersController');
Route::resource('admin/tasks', 'TasksController');
Route::resource('admin/subtasks', 'SubTaskController');
Route::resource('admin/roles', 'RolesController');
Route::resource('admin/locations', 'LocationController');


Route::resource('projects', 'ProjectController');
// Route::group(
//     ['middleware' => ['auth', 'verified', 'isActive'] ], function () {
//         Route::resource('projects', 'ProjectController');
//     }
// );
