import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
	    this._super(controller, model);
	    // this is for initializing the datetime picker component
	    let durations = Ember.A([{
	    	"id":"1",
	    	"startdate": "2016-08-04T10:00:00.000Z",
	    	"enddate": "2016-08-04T10:30:00.000Z"
	    }]);
	    controller.set('model.durations', durations);
	    controller.set('model.title', '');
	    controller.set('model.completed', false);
  	},
  	actions: {
  		saveForm(formdata) {
  			// Create a new task
  			let _self = this;
  			let task = this.store.createRecord('task', formdata);
  			task.save()
  			.then(function(){
  				_self.transitionTo('tasks');
  			})
  			.catch(function(reason) {
  				console.log(reason);
  				alert('Issue in submitting form');
  			});
  		}
  	}
});
