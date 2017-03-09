import Ember from 'ember';

export default Ember.Component.extend({
  byKeyword: '',
  estimates_filtered: Ember.computed('estimates', 'byKeyword', function() {
    var keyword = this.get('byKeyword');
    var filtered = this.get('estimates');
    if (keyword.length > 0) {
      keyword = keyword.toLowerCase().trim();
      filtered = this.get('estimates').filter((item) => item.get('title').toLowerCase().includes(keyword));
    }
    return filtered;
    }),
  todosSortingDesc: ['deadline:desc'],
  sortedEstimates: Ember.computed.sort('estimates_filtered', 'todosSortingDesc'),
  actions: {
    sortDir(dir) {
        console.log(dir);
        this.set('todosSortingDesc', ['deadline:'+ dir +'']);
    }
  }
});
