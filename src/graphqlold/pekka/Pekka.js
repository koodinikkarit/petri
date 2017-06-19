
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
	GraphQLBoolean
} from "graphql";

import * as classes from "./";

export const PekkaServiceQueries = {
	fetchWeeklyTimers: {
		"name": "fetchWeeklyTimers",
		"type": new GraphQLList(classes.WeeklyTimer),
		"args": {
			offset: {
				type: GraphQLInt
			},
			limit: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			offset,
			limit
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchWeeklyTimers({
				offset,
				limit
			}));
		})
	},
	fetchWeeklyTimerById: {
		"name": "fetchWeeklyTimerById",
		"type": classes.FetchWeeklyTimerByIdResponse,
		"args": {
			weeklyTimerId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			weeklyTimerId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchWeeklyTimerById({
				weeklyTimerId
			}));
		})
	},
	fetchWeeklyTimerBySlug: {
		"name": "fetchWeeklyTimerBySlug",
		"type": classes.FetchWeeklyTimerBySlugResponse,
		"args": {
			weeklyTimerSlug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			weeklyTimerSlug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchWeeklyTimerBySlug({
				weeklyTimerSlug
			}));
		})
	},
	fetchExecutors: {
		"name": "fetchExecutors",
		"type": new GraphQLList(classes.Executor),
		"args": {
			offset: {
				type: GraphQLInt
			},
			limit: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			offset,
			limit
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchExecutors({
				offset,
				limit
			}));
		})
	},
	fetchExecutorById: {
		"name": "fetchExecutorById",
		"type": classes.FetchExecutorByIdResponse,
		"args": {
			executorId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			executorId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchExecutorById({
				executorId
			}));
		})
	},
	fetchExecutorActionsByExecutorId: {
		"name": "fetchExecutorActionsByExecutorId",
		"type": new GraphQLList(classes.ExecutorAction),
		"args": {
			executorId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			executorId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchExecutorActionsByExecutorId({
				executorId
			}));
		})
	},
	fetchPenttiDevices: {
		"name": "fetchPenttiDevices",
		"type": new GraphQLList(classes.Pentti),
		"args": {
			offset: {
				type: GraphQLInt
			},
			limit: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			offset,
			limit
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchPenttiDevices({
				offset,
				limit
			}));
		})
	},
	fetchPenttiById: {
		"name": "fetchPenttiById",
		"type": classes.FetchPenttiByIdResponse,
		"args": {
			penttiId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			penttiId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchPenttiById({
				penttiId
			}));
		})
	},
	fetchButtonsByPenttiId: {
		"name": "fetchButtonsByPenttiId",
		"type": new GraphQLList(classes.Button),
		"args": {
			penttiId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			penttiId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.fetchButtonsByPenttiId({
				penttiId
			}));
		})
	}
}

export const PekkaServiceMutations = {
	createWeeklyTimer: {
		"name": "createWeeklyTimer",
		"type": classes.CreateWeeklyTimerResponse,
		"args": {
			slug: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			slug
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.createWeeklyTimer({
				slug
			}));
		})
	},
	editWeeklyTimer: {
		"name": "editWeeklyTimer",
		"type": classes.EditWeeklyTimerResponse,
		"args": {
			id: {
				type: GraphQLInt
			},
			slug: {
				type: GraphQLString
			},
			minutes: {
				type: GraphQLInt
			},
			hours: {
				type: GraphQLInt
			},
			active: {
				type: GraphQLBoolean
			},
			monday: {
				type: GraphQLBoolean
			},
			tuesday: {
				type: GraphQLBoolean
			},
			wednesday: {
				type: GraphQLBoolean
			},
			thursday: {
				type: GraphQLBoolean
			},
			friday: {
				type: GraphQLBoolean
			},
			saturday: {
				type: GraphQLBoolean
			},
			sunday: {
				type: GraphQLBoolean
			}
		},
		resolve: (root, {
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
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.editWeeklyTimer({
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
			}));
		})
	},
	createExecutor: {
		"name": "createExecutor",
		"type": classes.CreateExecutorResponse,
		"args": {
			name: {
				type: GraphQLString
			}
		},
		resolve: (root, {
			name
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.createExecutor({
				name
			}));
		})
	},
	addExecutorActionToExecutor: {
		"name": "addExecutorActionToExecutor",
		"type": classes.AddExecutorActionToExecutorResponse,
		"args": {
			name: {
				type: GraphQLString
			},
			executorId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			name,
			executorId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.addExecutorActionToExecutor({
				name,
				executorId
			}));
		})
	},
	editButton: {
		"name": "editButton",
		"type": classes.EditButtonResponse,
		"args": {
			buttonId: {
				type: GraphQLInt
			},
			onExecutorId: {
				type: GraphQLInt
			},
			offExecutorId: {
				type: GraphQLInt
			}
		},
		resolve: (root, {
			buttonId,
			onExecutorId,
			offExecutorId
		}, context) => new Promise((resolve, reject) => {
			resolve(context.pekka.editButton({
				buttonId,
				onExecutorId,
				offExecutorId
			}));
		})
	}
}
