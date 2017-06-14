import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit () {
      const name = this.get('name');

      // add default vars to data
      this.sendAction('createNewTheme', name);
    },
    reset () {
      this.sendAction('reset');
    }
  }
});
