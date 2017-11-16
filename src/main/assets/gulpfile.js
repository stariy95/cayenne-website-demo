var requireDir = require('require-dir');
var path       = require('path');

// Define some global paths used in tasks
global.hugoConfig = {
    srcDir: path.join(process.cwd(), '../site/'),
    publicDir: path.join(process.cwd(), '../../../target/site/public'),
    stagingDir: path.join(process.cwd(), '../../../target/site/staging')
};

// Require all tasks in gulp, including subfolders
requireDir('./gulp', { recurse: true });