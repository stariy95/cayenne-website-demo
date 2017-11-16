var gulp = require("gulp");
var replace = require("gulp-rev-replace");
var size = require('gulp-size');
var del = require('del');

gulp.task('reference:all', ['hugo:all'], function() {
    var manifest = gulp.src(global.hugoConfig.stagingDir + '/rev-manifest.json');

    return gulp.src(
        [
            global.hugoConfig.publicDir + '/**/*.html',
            global.hugoConfig.publicDir + '/**/*.xml',
            global.hugoConfig.publicDir + '/**/*.css'
        ])
        .pipe(replace({manifest: manifest, replaceInExtensions: ['.html', '.xml', '.css']}))
        .pipe(size())
        .pipe(gulp.dest(global.hugoConfig.publicDir));
});

gulp.task('reference:publish', ['hugo:publish'], function() {
    var manifest = gulp.src(global.hugoConfig.stagingDir + '/rev-manifest.json');

    return gulp.src(
        [
            global.hugoConfig.publicDir + '/**/*.html',
            global.hugoConfig.publicDir + '/**/*.xml',
            global.hugoConfig.publicDir + '/**/*.css'
        ])
        .pipe(replace({manifest: manifest, replaceInExtensions: ['.html', '.xml', '.css']}))
        .pipe(size())
        .pipe(gulp.dest(global.hugoConfig.publicDir));
});
