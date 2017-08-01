
export default {
	variation: (obj, props, context) => context.seppo.fetchVariationById(props.variationId || {}),
	searchVariations: (obj, props, context) => context.seppo.searchVariations(props.params || {}),
	songDatabase: (obj, props, context) => context.seppo.fetchSongDatabaseById(props.songDatabaseId),
	searchSongDatabases: (obj, props, context) => context.seppo.fetchSongDatabases(props.params || {}),
	ewDatabase: (obj, props, context) => context.seppo.fetchEwDatabaseById(props.ewDatabaseId),
	searchEwDatabases: (obj, props, context) => context.seppo.fetchEwDatabases(props.params || {}),
	songDatabaseVariations: (obj, {songDatabaseId}, context) => context.seppo.fetchVariationsBySongDatabaseId(songDatabaseId)
}