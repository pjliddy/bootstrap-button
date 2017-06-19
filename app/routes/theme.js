import Ember from 'ember';

export default Ember.Route.extend({
  target: Ember.inject.service('window-messenger-client'),

  model(params) {
    return this.get('store').findRecord('theme', params.theme_id);
  },

  renderTheme(theme) {
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

  init (){
    this._super();
    // listen to iFrame with layout
    window.addEventListener("message", handleMessage, false);
  },

  actions: {
    checkVarUpdate (theme) {
      theme.save();
      this.renderTheme(theme);
    }
  },
});

function handleMessage(e) {
 // const message = e.data.message;
 // const data = e.data.data;

 // console.log('app message received:', message);
 // console.log('data:', data);

 if (e.origin === '*') {
   return;
 } else {
   switch (e.data.message) {
     case 'document-ready':
       console.log('message: layout document-ready');
       break;
   }
 }
};
