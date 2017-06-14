import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

  classNameBindings: ['hideNewTheme'],
  hideNewTheme: true,

  actions: {
    toggleNewTheme () {
      this.get('flashMessages')
      .success('Toggle New Theme.');
      return this.toggleProperty('hideNewTheme');
    }
  }

});
