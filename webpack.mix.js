const mix = require('laravel-mix');

mix.styles(['resources/css/app.min.css', 'resources/css/icons.min.css', 'resources/css/fontawesome.css'], 'public/css/appcached.css')
    .styles('resources/css/custom.css', 'public/css/appburst.css');

mix.scripts(['resources/js/main.js', 'resources/js/axios.js', 'resources/js/vue.js', 'resources/js/form.js', 'resources/js/dropzone.js'], 'public/js/appcached.js')
    .scripts('resources/js/app.js', 'public/js/app.js')
    .scripts('resources/js/custom.js', 'public/js/custom.js');



mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
