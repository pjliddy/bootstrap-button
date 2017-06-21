import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  // classNames: ['navbar', 'navbar-default', 'navbar-custom', 'navbar-fixed-top'],
  classNames: ['navbar', 'navbar-custom'],

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
  }
});

/*

$('.navbar-collapse ul li a').click(function(){
  $('.navbar-toggle:visible').click();
});

*/
