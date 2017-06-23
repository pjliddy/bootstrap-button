import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['navbar-header'],

  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    navLink (dest) {
      this.sendAction('navLink', dest);
      // jQuery shortcut, should probably be component ref?
      Ember.$('.navbar-toggle:visible').click();
    },
  }
});
