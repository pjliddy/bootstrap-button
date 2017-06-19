import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    checkVarUpdate () {
      const theme = this.get('theme');
      this.sendAction('checkVarUpdate', theme);
    }
  }
});
