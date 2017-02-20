import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return [{
      id: '1',
      item: 'Item 1',
      hours: '27',
      clarity: '',
     }, {
      id: '2',
      item: 'Item222',
      hours: '9',
      clarity: '',
    }, {
      id: '3',
      item: 'Item333',
      hours: '80',
      clarity: '',
    }];
  },
  // actions: {
  //   addElement: function() {
  //     var elements = this.get('items'), // model contains the data/list for the rows
  //       newElement = ;
  //     elements.pushObject(newElement);
  //   }
  // }
});
