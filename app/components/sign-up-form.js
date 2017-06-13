import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form auth-form'],

  credentials: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
