
export default {
	createVariation: (obj, props, context) => context.seppo.createVariation(props.params || {}),
	editVariation: (obj, props, context) => context.seppo.editVariation(props.params),
	removeVariation: (obj, props, context) => context.seppo.removeVariation(props.variationId),
	createSongDatabase: (obj, props, context) => context.seppo.createSongDatabase(props.params || {}),
	editSongDatabase: (obj, props, context) => context.seppo.editSongDatabase(props.params || {}),
	removeSongDatabase: (obj, props, context) => context.seppo.removeSongDatabase(props.songDatabaseId),
	createEwDatabase: (obj, props, context) => context.seppo.createEwDatabase(props.params || {}),
	removeEwDatabase: (obj, props, context) => context.seppo.removeEwDatabase(props.ewDatabaseId),
	addVariationToSongDatabase: (obj, { songDatabaseId, variationId }, context) => context.seppo.addVariationToSongDatabase(songDatabaseId, variationId),
	removeVariationFromSongDatabase: (obj, { songDatabaseId, variationId }, context) => context.seppo.removeVariationFromSongDatabase(songDatabaseId, variationId)
}