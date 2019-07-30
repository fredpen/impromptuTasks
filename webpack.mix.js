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
    // 'resources/css/buttons.bootstrap4.css',
    'resources/css/icons.min.css',
    // 'resources/css/responsive.bootstrap4.css',

], 'public/css/all.css');


mix.styles([
    'resources/css/custom.css'

], 'public/css/custom.css');

mix.scripts([
   'resources/js/app.min.js',
    'resources/js/custom.js'

], 'public/js/all.js');

mix.scripts([
    'resources/js/form.js'

], 'public/js/form.js');

mix.scripts([
    'resources/js/chat.js'

], 'public/js/chat.js');
