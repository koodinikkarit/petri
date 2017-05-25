
import Context from "./context/Context";

console.log(Context);

var context = new Context("qwerty1");

var matti = context.matti;

matti.fetchMatrixs(0, 10).then(matrixs => {
	var matrix = matrixs[0];
	// matrix.conPorts.then(conPorts => {
	// 	console.log("conPorts", conPorts);
	// });
});