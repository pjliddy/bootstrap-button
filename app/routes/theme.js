import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  currentTheme: storageFor('theme'),

  model (params) {
    return this.get('store').findRecord('theme', params.theme_id);
  },

  init () {
    this._super();
    // listen to iFrame with layout
    // window.addEventListener("message", this.handleMessage, false);

    window.addEventListener("message", (e) => {
      this.handleMessage(e, "test data");
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
   // const message = e.data.message;
   // const data = e.data.data;

   // console.log('app message received:', message);
   // console.log('data:', data);

   if (e.origin === '*') {
     return;
   } else {
     switch (e.data.message) {
       case 'document-ready':
        console.log('message: layout document-ready:', data);
        break;
     }
   }
 },

  actions: {
    checkVarUpdate (theme) {
      theme.save();
      this.renderTheme(theme);
    }
  },
});
