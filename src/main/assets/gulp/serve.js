var gulp        = require("gulp");
var browserSync = require("browser-sync");
var watch 		= require("gulp-watch");

gulp.task('serve', ['build:all'], function() {

    browserSync({
        server: {
            baseDir: "../site/public/"
        },
        open: false
    });

    watch(
        ['../site/layouts/**/*', '../site/content/**/*', '../site/archetypes/**/*'], {},
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
