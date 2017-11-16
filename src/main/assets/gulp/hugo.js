var gulp = require('gulp');
var childProcess = require('child_process');
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

function hugo(drafts) {
    var src = path.join(process.cwd(), '../site/');
    var dst = path.join(process.cwd(), '../site/public');
    var conf = '../site/config.toml';

    gutil.log('src: ' + src + ' dst: ' + dst);

    var cmd = 'hugo --config=' + conf + ' -s ' + src + ' -d ' + dst;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    var result = childProcess.execSync(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

gulp.task('hugo:draft', function() {
    hugo(true);
});

gulp.task('hugo:all', ['hugo:delete', 'fonts'], function() {
    hugo(true);
});

gulp.task('hugo:delete', ['revision'], function() {
    var dst = path.join(process.cwd(), '../site/public');
    del.sync(dst, {force: true});
});

gulp.task('hugo:live', ['hugo:delete', 'fonts'], function() {
    hugo(false);
});
