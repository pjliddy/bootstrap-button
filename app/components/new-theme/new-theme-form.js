import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit () {
      const name = this.get('name');

      if (name.length < 1) {
        this.get('flashMessages')
        .warning(`Please provide theme name.`);
      } else {
        this.sendAction('createNewTheme', name);
        this.set('name', '');
        this.sendAction('toggleNewTheme');
      }
    },
    reset () {
      this.set('name', '');
      this.sendAction('reset');
    }
  }
});
