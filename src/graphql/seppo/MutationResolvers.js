
export default {
	createVariation: (obj, props, context) => context.seppo.createVariation(props),
	editVariation: (obje, props, context) => context.seppo.editVariation(props.params)
}