const mongoose = require('mongoose');

exports.connect = async () => {
	try{
		await mongoose.connect(process.env.URL_MONGO)
		console.log("conexion correcta")
	}catch(err){
		console.log(err)
	}
}

exports.mongoose = mongoose
