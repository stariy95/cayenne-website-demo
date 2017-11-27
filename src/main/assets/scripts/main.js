require('bootstrap/js/dist/tab');
require('bootstrap/js/dist/collapse');
require('bootstrap/js/dist/dropdown');

function initHljs() {
    var hljs    = require('highlight.js/lib/highlight.js');
    var xml     = require('highlight.js/lib/languages/xml.js');
    var java    = require('highlight.js/lib/languages/java.js');
    var sql     = require('highlight.js/lib/languages/sql.js');
    var groovy  = require('highlight.js/lib/languages/groovy.js');

    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('java', java);
    hljs.registerLanguage('sql', sql);
    hljs.registerLanguage('groovy', groovy);
    hljs.initHighlightingOnLoad();
}

function fixUpDom() {
    $('img').addClass('img-fluid');
}

$(document).ready(function () {
    initHljs();
    fixUpDom();
});

