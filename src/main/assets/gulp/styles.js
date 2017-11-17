const gulp 		 = require('gulp');
const sass 		 = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss 	 = require('gulp-clean-css');
const merge 	 = require('merge-stream');
const concat 	 = require('gulp-concat');

gulp.task('styles', function() {
    const scssStream = gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(concat('scss-files.css'));

    const cssStream = gulp.src('styles/**/*.css')
        .pipe(concat('css-files.css'));

    return merge(scssStream, cssStream)
        .pipe(autoprefixer('last 2 version'))
		.pipe(cleancss({advanced:false}))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(global.hugoConfig.stagingDir + '/css'));
});
