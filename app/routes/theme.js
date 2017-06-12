import Ember from 'ember'

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('theme', params.theme_id)
  },
  actions: {
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
})
