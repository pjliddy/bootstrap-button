import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form auth-form'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
      console.log(`sign-up-form submit`)
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
