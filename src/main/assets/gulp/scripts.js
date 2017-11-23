const gulp    = require('gulp');
const jshint  = require('gulp-jshint');
const uglify  = require('gulp-uglify');
const webpack = require('webpack'); // use newer version of webpack
const gulpWebpack  = require('webpack-stream');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

gulp.task('scripts', function() {
    return gulp.src('scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(gulpWebpack({
                output: {
                    filename: 'bundle.js'
                },
                plugins: [
                    // provide required objects
                    new webpack.ProvidePlugin({
                        $: 'jquery',
                        jQuery: 'jquery',
                        'window.jQuery': 'jquery',
                        Util: "exports-loader?Util!bootstrap/js/dist/util"
                    }),
                    new UglifyJsPlugin({
                        sourceMap: true
                    })
                ],
                devtool: "source-map"
        }, webpack))
        .pipe(gulp.dest(global.hugoConfig.stagingDir + '/js'));
});
