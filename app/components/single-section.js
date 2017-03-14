import Ember from 'ember';

export default Ember.Component.extend({
 	sectionIndex: 0,
 	sectionComment: '',
  section: Ember.computed('sectionIndex', function() {
    return this.get('sections')[this.get('sectionIndex')];
  }),
  sections: [
    {name: 'Research and Planning'},
    {name: 'UX and Information Architecture Design'},
    {name: 'Graphic Design'},
    {name: 'Front-end Development'},
    {name: 'Server  Environment Setup'},
    {name: 'Back-end Development'},
    {name: 'Management and Communications'},
    {name: 'Materials (fixed-price components)'}
  ],
});
