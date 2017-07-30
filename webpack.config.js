const path = require("path");

module.exports = {
	target: "node",
	module: {
	    rules: [
		    {
			    exclude: /node_modules/,
			    loader: "babel-loader",
			    test: /\.js$/,
            },
        ]
    },
    entry: {
	    app: path.resolve(__dirname, 'src', 'app.js')
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "petri.js"
    }
}