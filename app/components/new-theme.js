import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

  classNameBindings: ['hideNewTheme'],
  hideNewTheme: true,

  actions: {
    toggleNewTheme () {
      return this.toggleProperty('hideNewTheme');
    },

    createNewTheme (name) {
      // console.log('new-theme', name);
      this.sendAction('createNewTheme', name);
      return this.toggleProperty('hideNewTheme');
    },

    reset () {
      return this.toggleProperty('hideNewTheme');
    }
  }

});
