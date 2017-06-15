import Ember from 'ember'


export default Ember.Route.extend({
  init (){
      this._super();
      console.log('themes route init');
    },

  model(params) {
    return this.get('store').findRecord('theme', params.theme_id);
  },
  actions: {
    checkVarUpdate (theme) {
      theme.save();

      const iframe = document.getElementById('layout-frame');
      const varObjs = (theme.get('vars'));

      let vars = { };
      varObjs.forEach(e => vars[`${e.variable}`] = e.value);

      const data = {
        "message": "updateVars",
        "vars": vars
      };

      iframe.contentWindow.postMessage(data, '*');
    }

    // toggleItemDone(item) {
    //   // toggle value for item.done
    //   item.toggleProperty('done');
    //   // persists the change to db
    //   item.save();
    // },
    // deleteItem(item) {
    //   // deletes record and persists the change to db
    //   item.destroyRecord();
    //   // item.save();
    // },
    // createItem(data) {
    //   let item = this.get('store').createRecord('item', data);
    //   item.save();
    // }
  }
});
