var hljs = require('highlight.js/lib/highlight.js');
var xml  = require('highlight.js/lib/languages/xml.js');
var java = require('highlight.js/lib/languages/java.js');
var sql  = require('highlight.js/lib/languages/sql.js');
// var jsp  = require('highlight.js/lib/languages/jsp.js');

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('java', java);
hljs.registerLanguage('sql', sql);
// hljs.registerLanguage('jsp', jsp);
hljs.initHighlightingOnLoad();