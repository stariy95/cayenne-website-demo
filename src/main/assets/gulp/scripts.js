const gulp    = require('gulp');
const jshint  = require('gulp-jshint');
const uglify  = require('gulp-uglify');
const webpack = require('webpack');
const gulpWebpack  = require('webpack-stream');

gulp.task('scripts', function() {
    return gulp.src('scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(gulpWebpack({
                output: {
                    filename: 'bundle.js'
                }
            }, webpack))
        .pipe(uglify())
        .pipe(gulp.dest(global.hugoConfig.stagingDir + '/js'));
});
