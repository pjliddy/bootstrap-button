import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  defaults: Ember.inject.service('defaults'),

  model () {
    const themes = this.get('store').findAll('theme');
    return themes;
  },

  actions: {
    createNewTheme (name) {
      const data = {
        name: name
      };
      data.vars = this.get('defaults').get('vars');
      const theme = this.get('store').createRecord('theme', data);
      theme.save();
    },
    deleteTheme (theme) {
      // deletes record and persists the change to db
      theme.destroyRecord();
      theme.save();
    },
  }
});
