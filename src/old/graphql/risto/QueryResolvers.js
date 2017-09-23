
export default {
	user: (
		obj,
		{},
		context
	) => context.risto.fetchUserByToken()
};