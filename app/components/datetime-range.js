import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "ul",
	durations: [],
	initialize: function() {
		$('input.datetimepicker').daterangepicker({
			timePicker: true,
			timePickerIncrement: 30,
			locale: {
            	format: 'YYYY-MM-DD HH:mm'
        	}
		});
	}.on('didRender'),
	actions: {
		addDuration() {
			// Add a new row and initialize the datetime picker
			let durations = this.get('durations');
			this.get('durations').pushObject({
				'id':durations.length+1, 
				'startdate':'2016-08-04T10:00:00.000Z', 
				'enddate':'2016-08-04T10:30:00.000Z'
			});
		},
		removeDuration(obj) {
			// Remove a row
			this.get('durations').removeObject(obj);
		}
	}
});
