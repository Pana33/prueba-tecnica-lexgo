const express = require("express")
const router = express.Router()
const { getEmployee, insertEmployee, updateEmployee, deleteEmployee } = require("../controllers/employees")

router.get("/employees/:id?", getEmployee)
router.post("/employee", insertEmployee)
router.put("/employee/:id", updateEmployee)
router.delete("/employee/:id", deleteEmployee)

module.exports = router