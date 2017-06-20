import Ember from 'ember';

export function dashify(params/*, hash*/) {
  const words = params[0].toLowerCase().split(' ');
  return words.join('-');
}

export default Ember.Helper.helper(dashify);
