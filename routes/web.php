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


// routes for outside users interacting with projects
Route::get('/projects/task/{id}/show', 'ProjectshowController@show')->name('project.usershow'); // task show view for users


Route::resources([
    'account' => 'AccountController',
    'projects' => 'ProjectController'
]);


Route::get('notifications', 'AccountController@notifications')->name('notifications')->middleware('auth'); //for notifications


Route::group(
    ['middleware' => ['auth', 'verified', 'isActive']], function () {
        Route::resource('project/photos', 'ProjectphotoController');
        Route::put('project/ajax/{id}', 'ProjectController@ajax')->name('project.ajax');
    }
);

Route::group(
    ['middleware' => ['auth', 'isAdmin'] ], function () {
        Route::get('/admin', 'RolesController@create')->name('admin.home');


        Route::resources([
            'admin/users' => 'AdminUsersController',
            'admin/tasks' => 'TasksController',
            'admin/subtasks' => 'SubTaskController',
            'admin/roles' => 'RolesController',
            'admin/regions' => 'RegionController',
            'admin/cities' => 'CityController',
            'admin/countries' => 'CountryController'
        ]);
    }
);
