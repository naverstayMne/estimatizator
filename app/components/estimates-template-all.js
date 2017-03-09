import Ember from 'ember';

export default Ember.Component.extend({
  byKeyword: '',
  byUserName: '',
  estimates_filtered: Ember.computed('estimates', 'byKeyword', 'byUserName', function() {
    var keyword = this.get('byKeyword').toLowerCase(),
      userName = this.get('byUserName'),
      filtered = this.get('estimates');
    console.log(userName);
    keyword = keyword.toLowerCase().trim();
    if (userName.length > 0) {
      filtered = this.get('estimates').filter((item) => item.get('title').toLowerCase().includes(keyword) &&
                                                    item.get('autor.name') === userName);
    } else {
      filtered = this.get('estimates').filter((item) => item.get('title').toLowerCase().includes(keyword));
    }
    return filtered;
  }),
  todosSortingDesc: ['deadline:desc'],
  sortedEstimates: Ember.computed.sort('estimates_filtered', 'todosSortingDesc'),
  actions: {
    sortDir(dir) {
      console.log(dir);
      this.set('todosSortingDesc', ['deadline:' + dir + '']);
    },
    userSelect(user) {
      this.set('byUserName', user);
    }
  }
});
