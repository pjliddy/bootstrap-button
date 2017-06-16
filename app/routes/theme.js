import Ember from 'ember'


export default Ember.Route.extend({
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
    // console.log('themes route init:', this);
  },

  actions: {
    checkVarUpdate (theme) {
      theme.save();
      this.renderTheme(theme)
    }
  },

  firstRender: Ember.on('activate', function (params) {
    // const theme = this.get('store').findRecord('theme', params.theme_id);
    // this.renderTheme(theme);
    // console.log('activate', this)
  })
});
