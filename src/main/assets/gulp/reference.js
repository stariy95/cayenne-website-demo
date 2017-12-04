/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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