const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.styles([
    'resources/css/app.min.css',
    'resources/css/icons.min.css',

], 'public/css/all.css');


mix.styles([
    'resources/css/custom.css'

], 'public/css/custom.css');

// fileupload css
mix.styles([
    'resources/css/fileupload.css'

], 'public/css/fileupload.css');


mix.scripts([
   'resources/js/app.min.js',
    'resources/js/custom.js'
], 'public/js/all.js');

// wizard and basic responsive form
mix.scripts([
    'resources/js/form.js'

], 'public/js/form.js');


// for chatting and mail format
mix.scripts([
    'resources/js/chat.js'

], 'public/js/chat.js');


// file uploads
mix.scripts([
    'resources/js/fileupload.js'

], 'public/js/fileupload.js');


