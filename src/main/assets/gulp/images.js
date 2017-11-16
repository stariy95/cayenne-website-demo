var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('images', function () {
  return gulp.src('images/**/*.*')
    .pipe(changed('../site/staging/img'))
    .pipe(imagemin())
    .pipe(gulp.dest('../site/staging/img'));
});
