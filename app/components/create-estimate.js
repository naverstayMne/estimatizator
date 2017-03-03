// import Ember from 'ember';

// export default Ember.Route.extend({
// 	newEstimate: {
//     title: null,
//   },
//   query_ID: null,
//   store: Ember.inject.service(), 
//   actions: {
//     createEstimate() {
//       var newEstimate = this.get('newEstimate'), 
//         _store = this.get('store'),
//         saveUser = _store.createRecord('user', newEstimate); 
//         this.set('query_ID', saveUser.id);
//       saveUser.save(); 
//       this.set('newEstimate.title', null);
//     }
//   }
// });

import Ember from 'ember';

export default Ember.Component.extend({
    newEstimate: {
        title: null,
        created: null,
        deadline: null,
        comment: null
    },
    // clearTask: {
    //     title: null,
    //     created: null,
    //     deadline: null,
    //     comment: null
    // },
    store: Ember.inject.service(),
    actions: {
      createEstimate() {
        var creationDate = new Date();
        this.set('newEstimate.created', creationDate);

        var _store = this.get('store'),
            newEstimate = this.get('newTask');
        let estimate = _store.createRecord('estimate', newEstimate);
        estimate.save();
        this.set('newEstimate', this.get('clearTask'));
      }
    }
});
