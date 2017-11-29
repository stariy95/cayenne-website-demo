const gulp    = require("gulp");
const replace = require("gulp-rev-replace");
const size    = require('gulp-size');
const del     = require('del');

// replace references to generated resources inside content,
// like <script src='bundle.js' -> <script src='styles-f12328c2b2.js'..
function updateResourceRefs() {
    const manifest = gulp.src(global.hugoConfig.stagingDir + '/rev-manifest.json');

    return gulp.src(
        [
            global.hugoConfig.publicDir + '/**/*.html',
            global.hugoConfig.publicDir + '/**/*.xml',
            global.hugoConfig.publicDir + '/**/*.css'
        ])
        .pipe(replace({manifest: manifest, replaceInExtensions: ['.html', '.xml', '.css']}))
        .pipe(size())
        .pipe(gulp.dest(global.hugoConfig.publicDir));
}

// dev start
gulp.task('reference:all', ['hugo:all'], function() {
    return updateResourceRefs();
});

// release build
gulp.task('reference:publish', ['hugo:publish'], function() {
    return updateResourceRefs();
});

// live rebuild
gulp.task('reference:content', ['revision'], function() {
    return updateResourceRefs();
});