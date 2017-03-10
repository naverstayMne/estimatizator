import Ember from 'ember';

export default Ember.Component.extend({
	vehicle: null,
  vehicles: Ember.String.w('Tesla Chrysler Toyota'),
  actions: {
    selectVehicle(vehicle) {
      this.set('vehicle', vehicle);
    }
  }
});
