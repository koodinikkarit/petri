
import * as classes from "./";

const messages = require("./pekka_service_pb");

export default class {
	constructor(client, {
		id,
		slug,
		minutes,
		hours,
		active,
		monday,
		tuesday,
		wednesday,
		thursday,
		friday,
		saturday,
		sunday
	}) {
		this.client = client;
		var _id = id;
		var _slug = slug;
		var _minutes = minutes;
		var _hours = hours;
		var _active = active;
		var _monday = monday;
		var _tuesday = tuesday;
		var _wednesday = wednesday;
		var _thursday = thursday;
		var _friday = friday;
		var _saturday = saturday;
		var _sunday = sunday;

		Object.defineProperties(this, {
			"id": {
				get: () => _id
			},
			"slug": {
				get: () => _slug,
				set: (slug) => {
					_slug = slug
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setSlug(_slug);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"minutes": {
				get: () => _minutes,
				set: (minutes) => {
					_minutes = minutes
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setMinutes(_minutes);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"hours": {
				get: () => _hours,
				set: (hours) => {
					_hours = hours
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setHours(_hours);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"active": {
				get: () => _active,
				set: (active) => {
					_active = active
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setActive(_active);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"monday": {
				get: () => _monday,
				set: (monday) => {
					_monday = monday
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setMonday(_monday);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"tuesday": {
				get: () => _tuesday,
				set: (tuesday) => {
					_tuesday = tuesday
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setTuesday(_tuesday);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"wednesday": {
				get: () => _wednesday,
				set: (wednesday) => {
					_wednesday = wednesday
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setWednesday(_wednesday);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"thursday": {
				get: () => _thursday,
				set: (thursday) => {
					_thursday = thursday
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setThursday(_thursday);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"friday": {
				get: () => _friday,
				set: (friday) => {
					_friday = friday
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setFriday(_friday);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"saturday": {
				get: () => _saturday,
				set: (saturday) => {
					_saturday = saturday
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setSaturday(_saturday);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			"sunday": {
				get: () => _sunday,
				set: (sunday) => {
					_sunday = sunday
					var req = new messages.EditWeeklyTimerRequest();
					req.setWeeklytimerid(_id);
					req.setSunday(_sunday);
					this.client.editWeeklyTimer(req, (erro, res) => {

					});
				}
			},
			
		})
	}

	
}	
	
	