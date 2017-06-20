import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form form-auth'],

  credentials: {},

  actions: {
    submit () {
      const credentials = this.get('credentials');

      if (!credentials.email) {
        this.get('flashMessages')
        .warning(`Please provide an email address.`);
      } else if (!credentials.password) {
        this.get('flashMessages')
        .warning(`Please provide a password.`);
      } else if (!credentials.passwordConfirmation) {
        this.get('flashMessages')
        .warning(`Please confirm your password.`);
      } else if ( credentials.passwordConfirmation !== credentials.password) {
        this.get('flashMessages')
        .warning(`Your password confirmation didn't match`);
      } else {
        this.sendAction('submit', credentials);
      }
    },

    reset () {
      this.set('credentials', {});
      this.sendAction('reset');
    },

    deactivate () {
      this.reset();
    }

  },
});
