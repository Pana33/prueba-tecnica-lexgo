const { getDepartments } = require("../services/departments")

exports.getDepartment = async (request, response) => {
    const { id } = request.params
    const department = await getDepartments(id)
    response.status(200).json(department)
}