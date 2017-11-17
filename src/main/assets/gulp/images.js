const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const changed  = require('gulp-changed');

gulp.task('images', function () {
  return gulp.src('images/**/*.*')
    .pipe(changed(global.hugoConfig.stagingDir + '/img'))
    .pipe(imagemin())
    .pipe(gulp.dest(global.hugoConfig.stagingDir + '/img'));
});
