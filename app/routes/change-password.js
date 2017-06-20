import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      // .then(() => this.get('auth').signOut())
      // .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages')
        .success('Your password has been changed.');
      })
      .then(() => {
        // go to last screen
        history.back();
      })
      // .then(() => {
      //   this.get('flashMessages').warning('You have been signed out.');
      // })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
    reset () {
      this.set('passwords', {});
      history.back();
    }
  },
});
