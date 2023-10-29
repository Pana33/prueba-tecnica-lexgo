const { getDepartments, createDepartments } = require("../services/departments")

exports.getDepartment = async (request, response) => {
    const { id } = request.params
    const department = await getDepartments(id)
    response.status(200).json(department)
}

exports.createDepartment = async (request, response) => {
    const { name } = request.body
    const department = await createDepartments({name})
    response.status(200).json(department)
}