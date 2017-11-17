const gulp        = require("gulp");
const browserSync = require("browser-sync");
const watch       = require("gulp-watch");

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
		    gulp.start('build:all');
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
