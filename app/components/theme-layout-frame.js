import Ember from 'ember';
import ENV from 'bootstrap-button/config/environment';

export default Ember.Component.extend({
  env: ENV.environment,

  staticPath: Ember.computed('env', function(){
    if (this.get('env') === 'development') {
      return '/';
    } else {
      return '';
    }
  })
});
