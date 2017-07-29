
export default {
	variation: (obj, props, context) => context.seppo.fetchVariationById(props.variationId || {}),
	searchVariations: (obj, props, context) => context.seppo.searchVariations(props.params || {})
}