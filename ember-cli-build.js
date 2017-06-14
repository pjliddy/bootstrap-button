/*jshint node:true*/
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    },

    // 'ember-bootstrap': {
    //   'bootstrapVersion': 3,
    //   'importBootstrapFont': true,
    //   'importBootstrapCSS': false
    // },
    //
    // 'ember-composable-helpers': {
    //   only: ['dasherize']
    // }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');

  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', {
    destDir: 'fonts/bootstrap/'
  });

//   app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', {
//   destDir: 'font/bootstrap/'
// });

  return app.toTree();
};
