import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
    var estimate_id = params.estimate_id,
        _this = this;
    return Ember.RSVP.hash({
        estimate: _this.store.findRecord('estimate', estimate_id),
        id: estimate_id
    });
  },
});
