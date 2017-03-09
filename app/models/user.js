import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  name: attr('string'),
  password: attr('string'),
  avatar: attr('string'),
  estimates: hasMany('estimate', { async: true })
});
