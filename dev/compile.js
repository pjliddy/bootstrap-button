// in less

var vars = new Object;

$.each( varObjs, function( i, varObj ) {
  vars['@' + varObj.name] = varObj.output;
});

less.modifyVars( vars );
less.refreshStyles();


// node-sass

var sass = require('node-sass');

sass.render({
  file: scss_filename,
  [, options..]
}, function(err, result) { /*...*/ });
// OR
var result = sass.renderSync({
  data: scss_content
  [, options..]
});

import NodeSass from 'npm:node-sass';
