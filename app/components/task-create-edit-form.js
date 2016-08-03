import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitForm() {
			if(Ember.$("#title").val() !== '') {
				let durations = Ember.A(), range, tmpArr = [];
				Ember.$(".datetimepicker").each(function(index) {
					range = Ember.$(this).val();
					tmpArr = range.split(" - ");
					durations.pushObject({
						"id":index+1,
						"startdate":tmpArr[0],
						"enddate":tmpArr[1]
					});
				});
				// Parse the form and create the custom form data.
				let formdata = {
					"title": Ember.$("#title").val(),
					"completed": Ember.$("#completed").is(":checked"),
					"durations": durations
				};
				this.sendAction('action', formdata);
			} else {
				// Validate empty title field.
				alert('Task title cannot be empty');
			}
		}
	}
});
