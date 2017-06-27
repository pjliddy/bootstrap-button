import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  // make a GET request to the API when the client loads
  // to wake up the heroku dynamo
  ready: function () {
    Ember.$.ajax({
      url: config.apiHost,
      method: 'GET'
    });
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
