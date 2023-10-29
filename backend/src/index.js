require("dotenv").config();
const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

//Rutas
const departments = require("./routers/departments")
const employees = require("./routers/employees")

app.use(departments)
app.use(employees)

app.listen(process.env.SERVER_PORT || 3000, () => {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
