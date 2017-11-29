const gulp  = require('gulp');
const rev   = require('gulp-rev');
const del   = require('rev-del');
const path  = require('path');
const clean = require('gulp-clean');

// styles, scripts, images, fonts depends on this
gulp.task('clean-static', function() {
    return gulp.src(
        [
            global.hugoConfig.srcDir + '/static/css/**/*.css',
            global.hugoConfig.srcDir + '/static/js/**/*.js',
            global.hugoConfig.srcDir + '/static/js/**/*.js.map'
        ],{base: global.hugoConfig.srcDir, read: false})
        .pipe(clean({force: true}));
});

// separately copy source maps
gulp.task('copy-js-map', ['scripts'], function () {
    return gulp.src(global.hugoConfig.stagingDir + '/js/**/*.js.map')
        .pipe(gulp.dest(global.hugoConfig.srcDir + '/static/js'));
});

gulp.task('revision', ['styles', 'scripts', 'images', 'fonts', 'copy-js-map'], function() {
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
