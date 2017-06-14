import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  defaults: Ember.inject.service('defaults'),

  model () {
    return this.get('store').findAll('theme');
  },

  actions: {
    createTheme (data) {
      data.vars = this.get('defaults').get('vars');
      const theme = this.get('store').createRecord('theme', data);
      theme.save();
    },
    submit () {
      this.get('flashMessages')
      .success('New Theme Submit.');
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

// sample use in route controller for routes/defaults

// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model() {
//     defaults = Ember.inject.service('defaults');
//     return = this.get('defaults').get('vars');
//   }
// });
