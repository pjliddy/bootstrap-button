import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar navbar-inverse'],
  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  }
});
