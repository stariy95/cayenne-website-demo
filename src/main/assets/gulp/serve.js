var gulp        = require("gulp");
var browserSync = require("browser-sync");
var watch 		= require("gulp-watch");

gulp.task('serve', ['build:all'], function() {

    browserSync({
        server: {
            baseDir: global.hugoConfig.publicDir
        },
        open: false
    });

    watch(
        [
            global.hugoConfig.srcDir + '/layouts/**/*',
            global.hugoConfig.srcDir + '/content/**/*',
            global.hugoConfig.srcDir + '/archetypes/**/*'
        ], {},
        function handle() {
		    gulp.start('build:content');
	    }
    );

    watch(
        [
            'styles/**/*.scss',
            'styles/**/*.css',
            'scripts/**/*.js',
            'images/**/*.*'
        ], {},
        function handle() {
		    gulp.start('build:all');
        }
    );
});
