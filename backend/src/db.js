const { connect } = require("./models/mongoose");

exports.initDatabase = async () => {
	await connect();
};