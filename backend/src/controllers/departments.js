const { getDepartments } = require("../services/departments")

exports.getDepartment = async (request, response) => {
    const { id } = request.params
    console.log("controller")
    const department = await getDepartments(id)
    console.log(department)
    response.status(200).json(department)
}