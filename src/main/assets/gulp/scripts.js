var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');
var webpack = require('webpack');
var gulpWebpack  = require('webpack-stream');

gulp.task('scripts', function() {
    return gulp.src('scripts/**/*.js')
        .pipe(gulpWebpack({
                output: {
                    filename: 'bundle.js'
                }
            }, webpack))
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(uglify())
        .pipe(gulp.dest(global.hugoConfig.stagingDir + '/js'));
});
