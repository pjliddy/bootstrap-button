import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  // use ember-local-storage to access current theme object
  themeStore: storageFor('theme'),

  // save current theme to ember-local-storage when model is returned
  model (params) {
    return this.get('store').findRecord('theme', params.theme_id);
  },

  // store current model in ember-local-storage
  afterModel (theme) {
    this.set('themeStore.currentTheme', theme);
  },

  init () {
    this._super();

    // listen for messages from iFrame with layout
    window.addEventListener("message", (e) => {
      const currentTheme = this.get('themeStore.currentTheme');
      // const vars = currentTheme.get('vars');
      this.handleMessage(e, currentTheme);
    }, false);
  },

  renderTheme (theme) {
    const iframe = document.getElementById('layout-frame');
    const varObjs = (theme.get('vars'));

    let vars = { };
    varObjs.forEach(e => vars[`${e.variable}`] = e.value);

    const data = {
      "message": "updateVars",
      "vars": vars
    };

    iframe.contentWindow.postMessage(data, '*');
  },

  handleMessage (e, data) {
   if (e.origin === '*') {
     return;
   } else {
     switch (e.data.message) {
       // handle 'document-ready' message
       case 'document-ready':
        this.renderTheme(data);
        break;
     }
   }
 },

  actions: {
    updateVars (theme) {
      const timestamp = new Date();
      theme.set('updatedAt', timestamp);
      theme.save();
      this.renderTheme(theme);
    }
  },
});
