// app/mirage/factories/tasks.js
// Factory to generates fake tasks.

import Mirage, { faker } from 'ember-cli-mirage';
import moment from 'moment';

export function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export default Mirage.Factory.extend({
	title: faker.hacker.phrase,
	completed: faker.random.boolean,
	durations: function() {
		// This will generate some durations based on start date.
		var month, day, hour, minute, duration, startdate, enddate, duration_array = [];
		var year = 2016;
		var number_of_times = rand(5, 15);
		for(var i=0; i<number_of_times; i++) {
			month = rand(1, 8); // Range of month is Jan to Jul
			day = rand(1, 29); // Range of day is 1 to 28
			hour = rand(10, 19); // Range of hour is 10 to 18 (standard office timing)
			minute = rand(1, 60); // Range of minute is 1 to 59
			duration = rand(30, 241); // In minutes. Minimum duration is 30 mins and maximum is 4 hrs.
			startdate = moment(year+"-"+month+"-"+day+" "+hour+":"+minute, "YYYY-MM-DD HH:mm");
			enddate = moment(startdate).add(duration, 'm');
			duration_array.push({"id": i+1, "startdate": moment(startdate), "enddate": moment(enddate)});
		}
		return duration_array;
	}
});