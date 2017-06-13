import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form form-auth'],

  passwords: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('passwords'));
    },

    reset () {
      this.set('passwords', {});
      this.sendAction('reset');
    }
  },
});
