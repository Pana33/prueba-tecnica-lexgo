const express = require("express")
const router = express.Router()
const { getDepartment, createDepartment, updateDepartment } = require("../controllers/departments")

router.get("/departments/:id?", getDepartment)
router.post("/departments", createDepartment)
router.put("/department/:id", updateDepartment)

module.exports = router