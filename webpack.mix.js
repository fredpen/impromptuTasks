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

mix.styles(['resources/css/app.min.css', 'resources/css/icons.min.css', 'resources/css/fontawesome.css'], 'public/css/appcached.css')
   .styles(['resources/css/custom.css', ], 'public/css/appburst.css')
   .scripts(['resources/js/custom.js', 'resources/js/dropzone.js', 'resources/js/lib.js'], 'public/js/lib.js')
   .js('resources/js/app.js', 'public/js');

