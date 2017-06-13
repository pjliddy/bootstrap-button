import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form form-auth'],

  credentials: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
      this.sendAction('reset');
    },
  },
});
