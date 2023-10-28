require("dotenv").config();
const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

//Rutas
const departments = require("./routers/departments")

app.use(departments)

app.listen(process.env.SERVER_PORT || 3000, () => {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
