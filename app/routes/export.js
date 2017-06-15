import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const theme = this.controllerFor('theme').get('model');
    return this.controllerFor('theme').get('model');
  }
});
