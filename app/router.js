import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('estimates', {path: '/estimates'});
  this.route('create', {path: '/create'});
});

export default Router;
