const express = require("express")
const router = express.Router()
const { getDepartment } = require("../controllers/departments")

router.get("/department/:id?", getDepartment)

module.exports = router