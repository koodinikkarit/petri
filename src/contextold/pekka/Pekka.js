
import * as classes from "./";

const messages = require("./pekka_service_pb");
const services = require("./pekka_service_grpc_pb");

export default class Pekka {
	constructor(ip, port, credentials) {
		this.client = new services.PekkaClient(ip + ":" + port, credentials);
	}

	fetchWeeklyTimers({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchWeeklyTimersRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchWeeklyTimers(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.WeeklyTimer(this.client, {
					id: data.getId(),
					slug: data.getSlug(),
					minutes: data.getMinutes(),
					hours: data.getHours(),
					active: data.getActive(),
					monday: data.getMonday(),
					tuesday: data.getTuesday(),
					wednesday: data.getWednesday(),
					thursday: data.getThursday(),
					friday: data.getFriday(),
					saturday: data.getSaturday(),
					sunday: data.getSunday()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchWeeklyTimerById({
		weeklyTimerId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchWeeklyTimerByIdRequest();
			req.setWeeklytimerid(weeklyTimerId);
			
			this.client.fetchWeeklyTimerById(req, (err, res) => {
				resolve(new classes.FetchWeeklyTimerByIdResponse(this.client, {
					weeklyTimer: res.getFetchWeeklyTimerByIdResponse().getWeeklytimer()
				}));
			});
		});
	}

	fetchWeeklyTimerBySlug({
		weeklyTimerSlug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchWeeklyTimerBySlugRequest();
			req.setWeeklytimerslug(weeklyTimerSlug);
			
			this.client.fetchWeeklyTimerBySlug(req, (err, res) => {
				resolve(new classes.FetchWeeklyTimerBySlugResponse(this.client, {
					weeklyTimer: res.getFetchWeeklyTimerBySlugResponse().getWeeklytimer()
				}));
			});
		});
	}

	createWeeklyTimer({
		slug
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateWeeklyTimerRequest();
			req.setSlug(slug);
			
			this.client.createWeeklyTimer(req, (err, res) => {
				resolve(new classes.CreateWeeklyTimerResponse(this.client, {
					
				}));
			});
		});
	}

	editWeeklyTimer({
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
		return new Promise((resolve, reject) => {
			var req = new messages.EditWeeklyTimerRequest();
			req.setId(id);
			req.setSlug(slug);
			req.setMinutes(minutes);
			req.setHours(hours);
			req.setActive(active);
			req.setMonday(monday);
			req.setTuesday(tuesday);
			req.setWednesday(wednesday);
			req.setThursday(thursday);
			req.setFriday(friday);
			req.setSaturday(saturday);
			req.setSunday(sunday);
			
			this.client.editWeeklyTimer(req, (err, res) => {
				resolve(new classes.EditWeeklyTimerResponse(this.client, {
					weeklyTimer: res.getEditWeeklyTimerResponse().getWeeklytimer()
				}));
			});
		});
	}

	fetchExecutors({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchExecutorsRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchExecutors(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Executor(this.client, {
					id: data.getId(),
					name: data.getName()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchExecutorById({
		executorId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchExecutorByIdRequest();
			req.setExecutorid(executorId);
			
			this.client.fetchExecutorById(req, (err, res) => {
				resolve(new classes.FetchExecutorByIdResponse(this.client, {
					executor: res.getFetchExecutorByIdResponse().getExecutor()
				}));
			});
		});
	}

	fetchExecutorActionsByExecutorId({
		executorId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchExecutorActionsByExecutorIdRequest();
			req.setExecutorid(executorId);
			
			var call = this.client.fetchExecutorActionsByExecutorId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.ExecutorAction(this.client, {
					id: data.getId(),
					name: data.getName(),
					executorId: data.getExecutorid(),
					actionType: data.getActiontype(),
					parameters: data.getParameters()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	createExecutor({
		name
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.CreateExecutorRequest();
			req.setName(name);
			
			this.client.createExecutor(req, (err, res) => {
				resolve(new classes.CreateExecutorResponse(this.client, {
					executor: res.getCreateExecutorResponse().getExecutor()
				}));
			});
		});
	}

	addExecutorActionToExecutor({
		name,
		executorId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.AddExecutorActionToExecutorRequest();
			req.setName(name);
			req.setExecutorid(executorId);
			
			this.client.addExecutorActionToExecutor(req, (err, res) => {
				resolve(new classes.AddExecutorActionToExecutorResponse(this.client, {
					executorAction: res.getAddExecutorActionToExecutorResponse().getExecutoraction()
				}));
			});
		});
	}

	editButton({
		buttonId,
		onExecutorId,
		offExecutorId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.EditButtonRequest();
			req.setButtonid(buttonId);
			req.setOnexecutorid(onExecutorId);
			req.setOffexecutorid(offExecutorId);
			
			this.client.editButton(req, (err, res) => {
				resolve(new classes.EditButtonResponse(this.client, {
					button: res.getEditButtonResponse().getButton()
				}));
			});
		});
	}

	fetchPenttiDevices({
		offset,
		limit
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchPenttiDevicesRequest();
			req.setOffset(offset);
			req.setLimit(limit);
			
			var call = this.client.fetchPenttiDevices(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Pentti(this.client, {
					id: data.getId(),
					ip: data.getIp()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}

	fetchPenttiById({
		penttiId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchPenttiByIdRequest();
			req.setPenttiid(penttiId);
			
			this.client.fetchPenttiById(req, (err, res) => {
				resolve(new classes.FetchPenttiByIdResponse(this.client, {
					pentti: res.getFetchPenttiByIdResponse().getPentti()
				}));
			});
		});
	}

	fetchButtonsByPenttiId({
		penttiId
	}) {
		return new Promise((resolve, reject) => {
			var req = new messages.FetchButtonsByPenttiIdRequest();
			req.setPenttiid(penttiId);
			
			var call = this.client.fetchButtonsByPenttiId(req);
			var items = [];

			call.on("data", data => {
				items.push(new classes.Button(this.client, {
					id: data.getId(),
					number: data.getNumber(),
					penttiId: data.getPenttiid(),
					onExecutorId: data.getOnexecutorid(),
					offExecutorId: data.getOffexecutorid()
				}));
			});

			call.on("end", () => {
				resolve(items);
			});
		});
	}


}



