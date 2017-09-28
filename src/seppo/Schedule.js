import {
	DomainEntity,
	IdType,
	StringType,
	ListType,
	BooleanType
} from "grpc-graphql-router-tools";

import {
	Variation
} from "./Variation";

export const Schedule = new DomainEntity({
	name: "Schedule",
	fields: () => ({
		id: {
			type: IdType
		},
		name: {
			type: StringType
		},
		variations: {
			type: new ListType(Variation),
			inhertedArgs: {
				id: "scheduleId"
			},
			serviceMethod: "searchVariations",
			returnField: "variations"
		}
	})
});

export const SchedulesConnection = new DomainEntity({
	name: "SchedulesConnection",
	fields: () => ({
		schedules: {
			type: new ListType(Schedule)
		}
	})
});

export const CreateScheduleResponse = new DomainEntity({
	name: "CreateScheduleResponse",
	fields: () => ({
		schedule: {
			type: Schedule
		}
	})
});

export const UpdateScheduleResponse = new DomainEntity({
	name: "UpdateScheduleResponse",
	fields: () => ({
		success: {
			type: BooleanType
		},
		schedule: {
			type: Schedule
		}
	})
});

export const RemoveScheduleResponse = new DomainEntity({
	name: "RemoveScheduleResponse",
	fields: () => ({
		success: {
			type: BooleanType
		}
	})
});