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
Route::get('/projects/task/{task}/show', 'ProjectshowController@show')->name('project.usershow'); // task show view for users
Route::post('/projects/{project}/apply', 'ProjectshowController@apply')->name('project.apply'); // task show view for users


Route::resources([
    'account' => 'AccountController',
    'projects' => 'ProjectController',
    'admin/countries' => 'CountryController',
    'admin/regions' => 'RegionController',
    'admin/cities' => 'CityController'
]);


Route::get('notifications', 'AccountController@notifications')->name('notifications')->middleware('auth'); //for notifications
Route::put('region/show/ajax/{id}', 'RegionController@showAjax');//country ajax to show regions
Route::put('city/show/ajax/{id}', 'CityController@showAjax');//country ajax to show city

Route::group(
    ['middleware' => ['auth', 'verified', 'isActive']], function () {
        Route::resource('project/photos', 'ProjectphotoController');
        Route::put('project/ajax/{id}', 'ProjectController@ajax')->name('project.ajax');
    }
);


Route::group(
    ['middleware' => ['auth', 'isAdmin'] ], function () {
        Route::get('/admin', 'AdminController@index')->name('admin.home');

        Route::get('/admin/projects/all', 'AdminProjectController@all')->name('project.all');
        Route::get('/admin/projects/ongoing', 'AdminProjectController@ongoing')->name('project.ongoing');
        Route::get('/admin/projects/completed', 'AdminProjectController@completed')->name('project.completed');
        Route::get('/admin/projects/posted', 'AdminProjectController@posted')->name('project.posted');
        Route::get('/admin/projects/created', 'AdminProjectController@created')->name('project.created');
        Route::get('/admin/projects/cancelled', 'AdminProjectController@cancelled')->name('project.cancelled');
        Route::get('/admin/projects/{project_id}/adminShow', 'AdminProjectController@adminShow')->name('project.adminShow');
        Route::post('/admin/project/assign', 'AdminProjectController@assign')->name('project.assign');
        Route::post('/admin/project/reassign', 'AdminProjectController@reassign')->name('project.reassign');
        Route::get('/project/{project_id}/accept', 'AdminProjectController@accept')->name('project.accept');

        Route::resources([
            'admin/users' => 'AdminUsersController',
            'admin/tasks' => 'TasksController',
            'admin/subtasks' => 'SubTaskController'
        ]);
    }
);
