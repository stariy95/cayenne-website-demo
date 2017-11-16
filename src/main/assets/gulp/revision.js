var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('rev-del');
var path = require('path');

gulp.task('revision', ['styles','scripts', 'images'], function() {
    return gulp.src(
        [
            global.hugoConfig.stagingDir + '/css/**/*.css',
            global.hugoConfig.stagingDir + '/js/**/*.js',
            global.hugoConfig.stagingDir + '/img/**/*.*'
        ],
        {base: global.hugoConfig.stagingDir})
        .pipe(rev())
        .pipe(gulp.dest(global.hugoConfig.srcDir + '/static'))
        // TODO: can't use global.hugoConfig.stagingDir as manifest path is relative to base dir, not current dir
        .pipe(rev.manifest('../../../../target/site/staging/rev-manifest.json'))
        .pipe(del({dest: global.hugoConfig.srcDir + '/static', force: true}))
        .pipe(gulp.dest(global.hugoConfig.srcDir + '/static'));
});
