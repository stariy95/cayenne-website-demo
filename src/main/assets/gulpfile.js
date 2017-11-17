const requireDir = require('require-dir');
const path = require('path');

// Define some global paths used in tasks
global.hugoConfig = {
    localhost: '192.168.1.97', //'localhost'
    debugPort: 3000,
    srcDir: path.join(process.cwd(), '../site/'),
    publicDir: path.join(process.cwd(), '../../../target/site/public'),
    stagingDir: path.join(process.cwd(), '../../../target/site/staging')
};

// Require all tasks in gulp, including subfolders
requireDir('./gulp', { recurse: true });