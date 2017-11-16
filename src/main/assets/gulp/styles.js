var gulp 		 = require('gulp');
var sass 		 = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleancss 	 = require('gulp-clean-css');
var merge 		 = require('merge-stream');
var concat 		 = require('gulp-concat');

gulp.task('styles', function() {
	var scssStream = gulp.src('styles/**/*.scss')
	    .pipe(sass())
	    .pipe(concat('scss-files.css'));

	var cssStream = gulp.src('styles/**/*.css')
	    .pipe(concat('css-files.css'));

    return merge(scssStream, cssStream)
        .pipe(autoprefixer('last 2 version'))
		.pipe(cleancss({advanced:false}))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(global.hugoConfig.stagingDir + '/css'));
});
