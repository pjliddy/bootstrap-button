// import ApplicationSerializer from './application';
//
// export default ApplicationSerializer.extend({
// });
import Ember from 'ember';

import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
   keyForAttribute: function(key) {
    return Ember.String.decamelize(key);
  }
});
