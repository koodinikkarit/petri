const fs = require("fs");
const grpc = require("grpc");
const mattiservice = grpc.load("./matti_service/matti_service.proto").MattiService;

const Matrix = require("./Matrix");

module.exports = class Matti {
	constructor(props) {
		if (props) {
			if (props.ip && props.port) {
				this.client = new mattiservice.Matti(`${props.ip}:${props.port}`, grpc.credentials.createInsecure());
	
			}	
		}
	}
	fetchMatrixs({ offset, limit }) {
		return new Promise((resolve, reject) => {
			var call = this.client.fetchMatrixs({
				offset,
				limit
			})

			var matrixs = [];

			call.on("data", matrix => {
				matrixs.push(new Matrix(this.client, matrix));
			});

			call.on("end", () => {
				resolve(matrixs);
			});
		});
	}

	fetchMatrixById(id) {
		return new Promise((resolve, reject) => {
			client.fetchMatrixById({
				id: 1
			}, function (error, matrix) {
				if (!error) 
				resolve(new Matrix(this.client, matrix));
			});
		});
	}

	fetchMatrixBySlug(slug) {
		return new Promise((resolve, reject) => {
			client.fetchMatrixBySlug({
				slug
			}, function (error, matrix) {
				if (!error)
				resolve(new Matrix(this.client, matrix));
			});
		});
	}

	remove() {
		return new Promise((resolve, reject) => {
			client.removeMatrix({
				id: this.id
			}, matrixRemoved => {
				
			});
		})
	}
}