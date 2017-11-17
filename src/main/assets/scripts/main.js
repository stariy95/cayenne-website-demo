window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');

require('bootstrap');

var hljs = require('highlight.js/lib/highlight.js');
var xml  = require('highlight.js/lib/languages/xml.js');
var java = require('highlight.js/lib/languages/java.js');
var sql  = require('highlight.js/lib/languages/sql.js');

$(document).ready(function () {
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('java', java);
    hljs.registerLanguage('sql', sql);
    hljs.initHighlightingOnLoad();

    $('img').addClass('img-fluid');
});

