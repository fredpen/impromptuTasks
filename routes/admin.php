<?php

use Illuminate\Support\Facades\Route;

// Projects
Route::group(['prefix' => 'project', 'name' => 'project'], function() {
    
    Route::get('{draft}', 'ProjectController@fetchProjectWithStatus')->name('draftProjects');
    Route::get('{posted}', 'ProjectController@fetchProjectWithStatus')->name('postedProjects');
    Route::get('{started}', 'ProjectController@fetchProjectWithStatus')->name('startedProjects');
    Route::get('{completed}', 'ProjectController@fetchProjectWithStatus')->name('completedProjects');
    Route::get('{cancelled}', 'ProjectController@fetchProjectWithStatus')->name('cancelledProjects');
    Route::get('{deleted}', 'ProjectController@fetchProjectWithStatus')->name('deletedProjects');

    Route::get('{userId}/user-projects', 'ProjectController@usersProject')->name('usersProject');
    Route::post('store', 'ProjectController@store')->name('store');
    Route::get('/{projectId}/show', 'ProjectController@show')->name('show');
    Route::get('/{projectId}/delete', 'ProjectController@delete')->name('delete')->middleware(['auth:api', 'isAdmin']);
    Route::post('/{projectId}/update', 'ProjectController@update')->name('update');
});


// Route::group(
//     ['middleware' => ['auth', 'isAdmin'] ], function () {
//         Route::get('/admin', 'AdminController@index')->name('admin.home');
//         Route::get('/admin/projects/all', 'AdminProjectController@showallProjects')->name('project.all');
//         Route::get('/admin/projects/ongoing', 'AdminProjectController@showongoingProjects')->name('project.ongoing');
//         Route::get('/admin/projects/completed', 'AdminProjectController@showcompletedProjects')->name('project.completed');
//         Route::get('/admin/projects/posted', 'AdminProjectController@showpostedProjects')->name('project.posted');
//         Route::get('/admin/projects/created', 'AdminProjectController@showcreatedProjects')->name('project.created');
//         Route::get('/admin/projects/cancelled', 'AdminProjectController@showcancelledProjects')->name('project.cancelled');
//         Route::get('/admin/projects/{project}/adminShow', 'AdminProjectController@adminShow')->name('project.adminShow');
//         Route::post('/admin/project/assign', 'AdminProjectController@assign')->name('project.assign');
//         Route::post('/admin/project/reassign', 'AdminProjectController@reassign')->name('project.reassign');
        

//         Route::resources([
//             'admin/users' => 'AdminUsersController',
//             'admin/tasks' => 'TasksController',
//             'admin/subtasks' => 'SubTaskController'
//         ]);
//     }
// );
