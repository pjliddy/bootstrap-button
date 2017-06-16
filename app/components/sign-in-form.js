import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form form-auth'],

  actions: {
    submit () {
      const credentials = this.get('credentials');

      if (!credentials.email) {
        this.get('flashMessages')
        .warning(`Please provide an email address.`);
      } else if (!credentials.password) {
        this.get('flashMessages')
        .warning(`Please provide a password.`);
      } else {
        this.sendAction('submit', credentials);
      }
    },

    reset () {
      this.set('credentials', {});
      this.sendAction('reset');
    },

    clearForm: Ember.on('deactivate', function () {
      this.reset();
    })
  },
});
