// webpack.mix.js

let mix = require('laravel-mix');

if (process.env.npm_lifecycle_event !== 'watch') {
    mix.combine(
        [
            './node_modules/normalize.css/normalize.css',
            // './node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
        ],
        'dist/css/vendors.css'
    );

    mix.copy('assets/fonts', 'dist/fonts');
}

mix.js('src/js/app.js', 'js')
    .sass('src/sass/app.scss', 'css')
    .options({
        processCssUrls: false,
    })
    .setPublicPath('dist');

if (mix.inProduction()) {
    mix.sourceMaps().version();
}
