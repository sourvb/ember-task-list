import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('task');
	},
	setupController: function(controller, model) {
	    this._super(controller, model);
	    let task, events = Ember.A();
	    model.get("content").forEach(function(item) {
	    	task = model.store.peekRecord('task', item.id);
	    	task.get("durations").forEach(function(duration) {
	    		events.pushObject({
	    			'title': task.get("title"),
 					'start': duration.startdate,
 					'end': duration.enddate
	    		});
	    	});
	    });
	    // For fullcalendar plugin
	    controller.set('model.events', events);
	    controller.set('model.header', {
				'left': 'prev,next today',
				'center': 'title',
				'right': 'month,agendaWeek,agendaDay'
			});
  	}
});
