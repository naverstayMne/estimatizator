import Ember from 'ember';

export default Ember.Component.extend({
    newEstimate: {
        title: null,
        created: null,
    },
    clearEstimate: {
        title: null,
        created: null,
    },
    findedEstimate: null,
    estimate_ID: null,
    store: Ember.inject.service(),
    actions: {
      createEstimate() {
        var creationDate = new Date();
        this.set('newEstimate.created', creationDate);

        var _store = this.get('store'),
            newEstimate = this.get('newEstimate');

        let estimate = _store.createRecord('estimate', newEstimate);
        _store.findRecord('user', this.get('estimate_id')).then((user) => {
          user.get('estimates').addObject(estimate);
          // var findedEstimate = this.get('estimates');
          // if(typeof findedEstimate[0] !== "undefined") {
          //   this.set('findedEstimate', findedEstimate[0]);
          //   this.set('estimate_ID', findedEstimate[0].id);
          // }
          user.save();
          estimate.save();
        });
        this.set('newEstimate', this.get('clearEstimate'));
        console.log(newEstimate);
      }
    }
});


// import Ember from 'ember';

// export default Ember.Component.extend({
//     newEstimate: {
//         title: null,
//         created: null,
//         deadline: null,
//         comment: null
//     },
//     task_id: null,
//     store: Ember.inject.service(),
//     onSuccessfulSave : function() {
//         this.transitionToRoute('blog');
//     },
//     actions: {
//       createEstimate() {
//         var creationDate = new Date();
//         this.set('newEstimate.created', creationDate);
//         var _store = this.get('store'),
//             newEstimate = this.get('newEstimate');
//         let estimate = _store.createRecord('estimate', newEstimate);
//         this.set('task_id', estimate.id);
//         estimate.save();
//         this.set('newEstimate', this.get('clearTask'));
//       }
//     }
// });
