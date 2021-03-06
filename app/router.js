import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('task', { path: '/:id' }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('dashboard');
});

export default Router;
