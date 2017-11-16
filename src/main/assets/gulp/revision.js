var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('rev-del');
var path = require('path');

gulp.task('revision', ['styles','scripts', 'images'], function() {
    return gulp.src(
        [
            '../site/staging/css/**/*.css',
            '../site/staging/js/**/*.js',
            '../site/staging/img/**/*.*'
        ],
        {base: path.join(process.cwd(), '../site/staging')})
        .pipe(rev())
        .pipe(gulp.dest('../site/static'))
        .pipe(rev.manifest())
        .pipe(del({dest: '../site/static', force: true}))
        .pipe(gulp.dest('../site/static'));
});
