var gulp         = require('gulp');
var childProcess = require('child_process');
var path         = require('path');
var hugo         = require('hugo-bin');

function runHugo(publish) {
    var src = global.hugoConfig.srcDir;
    var dst = global.hugoConfig.publicDir;
    var conf = '../site/config.toml';

    var cmd = hugo + ' --config=' + conf + ' -s ' + src + ' -d ' + dst;

    if (publish) {
        cmd += ' --baseUrl="http://cayenne.apache.org/" ';
    } else {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    var result = childProcess.execSync(cmd, {encoding: 'utf-8'});
    console.log('hugo out: \n' + result);
}

gulp.task('hugo:all', ['revision', 'fonts'], function() {
    runHugo(false);
});

gulp.task('hugo:publish', ['revision', 'fonts'], function() {
    runHugo(true);
});
