import Ember from 'ember'

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('theme', params.theme_id);
  },
  actions: {
    checkVarUpdate (theme) {
      theme.save();

      const iframe = document.getElementById('layout-frame');

      // const vars = JSON.stringify(theme.get('vars'));
      const varObjs = (theme.get('vars'));

      // {
      //   '@buttonFace': '#5B83AD',
      //   '@buttonText': '#D9EEF2'
      //  }

      let vars = { };
      varObjs.forEach(e => {
        // obj[`@${e.variable}`] = `${e.value}`;
        vars[`${e.variable}`] = e.value

        // return `"${e.variable}" : "${e.value}"`;
      });

      // vars = JSON.stringify(vars);


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
