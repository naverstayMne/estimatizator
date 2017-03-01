import Ember from 'ember';

export default Ember.Component.extend({
  newUser: {
    name: null,
    password: null
  },
  user_register_status: {
    state: false,
    message: 'Success'
  },
  query_ID: null,
  filepicker: Ember.inject.service(),
  store: Ember.inject.service(), //this we must do only for access DS from component
  actions: {
    createNewUser() {
      var newUser = this.get('newUser'), // Get user object
        _store = this.get('store'),
        saveUser = _store.createRecord('user', newUser); // Create new record
        this.set('query_ID', saveUser.id);
      saveUser.save(); // Save created record
      this.set('user_register_status.state', true);
      this.set('newUser.name', null);
      this.set('newUser.password', null);
    },
    cancel() {
      this.set('userChoise.state', true);
      this.set('userChoise.login', false);
      this.set('userChoise.register', false);
      this.set('user_register_status.state', false);
    }
  }
});
