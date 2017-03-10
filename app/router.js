import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('estimate-list', {path: '/user/:query_id'});
  this.route('all-estimates', {path: '/all-estimates'});
  
});

export default Router;
