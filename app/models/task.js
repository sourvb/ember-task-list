// Task Model

import DS from 'ember-data';

export default DS.Model.extend({  
	title: DS.attr('string'),
	completed: DS.attr('boolean'),
	durations: DS.attr()
});
