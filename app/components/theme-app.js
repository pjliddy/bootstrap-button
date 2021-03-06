import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    navLink (dest) {
      this.sendAction('navLink', dest);
    },
    signOut () {
      this.sendAction('signOut');
    },
  },
});
