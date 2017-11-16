var gulp = require('gulp');

gulp.task('fonts', function() {
    return gulp.src('styles/fonts/*')
        .pipe(gulp.dest('../site/static/css/fonts'));
});