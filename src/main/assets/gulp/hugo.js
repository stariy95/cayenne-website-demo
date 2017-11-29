const gulp = require('gulp');
const childProcess = require('child_process');
const path = require('path');
const hugo = require('hugo-bin');

function runHugo(publish) {
    const src = global.hugoConfig.srcDir;
    const dst = global.hugoConfig.publicDir;
    const conf = global.hugoConfig.srcDir + 'config.yaml';

    let cmd = hugo + ' --config=' + conf + ' -s ' + src + ' -d ' + dst;

    if (publish) {
        cmd += ' --baseUrl="http://cayenne.apache.org/" ';
    } else {
        cmd += ' --baseUrl="http://' + global.hugoConfig.localhost + ':' + global.hugoConfig.debugPort + '/" '
            + ' --buildDrafts=true --verbose=true';
    }

    const result = childProcess.execSync(cmd, {encoding: 'utf-8'});
    console.log('hugo out: \n' + result);
}

gulp.task('hugo:all', ['revision'], function() {
    runHugo(false);
});

gulp.task('hugo:publish', ['revision'], function() {
    runHugo(true);
});
