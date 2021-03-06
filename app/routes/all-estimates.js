import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
          estimates: this.store.findAll('estimate'),
          users: this.store.findAll('user')
      });
    }
});
