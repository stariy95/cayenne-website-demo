const gulp = require('gulp');

gulp.task('fonts', ['clean-static'], function() {
    return gulp.src('styles/fonts/*')
        .pipe(gulp.dest('../site/static/css/fonts'));
});