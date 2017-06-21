import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  vars: DS.attr(),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  updatedAt: DS.attr('date')
});
