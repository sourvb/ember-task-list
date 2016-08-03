import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
  		updateForm(formdata) {
  			// Update/Patch a task
  			let _self = this;
  			let id = this.controller.get('model.id');
  			this.store.findRecord('task', id).then(function(task) {
  				task.set("title", formdata.title);
  				task.set("completed", formdata.completed);
  				task.set("durations", formdata.durations);
  				task.save()
  				.then(function(){
  					_self.transitionTo('tasks.task', id);
  				})
	  			.catch(function(reason) {
	  				console.log(reason);
	  				alert('Issue while updating the task');
	  			});
  			});
  		}
  	}
});
