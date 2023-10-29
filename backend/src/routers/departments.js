const express = require("express")
const router = express.Router()
const { getDepartment, createDepartment } = require("../controllers/departments")

router.get("/departments/:id?", getDepartment)
router.post("/departments", createDepartment)

module.exports = router