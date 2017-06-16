import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form form-auth'],

  passwords: {},

  actions: {
    submit () {
      const passwords = this.get('passwords');

      if (!passwords.previous) {
        this.get('flashMessages')
        .warning(`Please enter your current password.`);
      } else if (!passwords.next) {
        this.get('flashMessages')
        .warning(`Please enter your new password.`);
      } else {
        this.sendAction('submit', passwords);
      }
    },

    reset () {
      this.set('passwords', {});
      this.sendAction('reset');
    },

    clearForm: Ember.on('deactivate', function () {
      this.reset();
    })

  },
});
