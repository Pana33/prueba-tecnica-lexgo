const { getEmployees, addEmployee, updtEmployee, dltEmployee } = require("../services/employees")

exports.getEmployee = async (request, response) => {
    const { id } = request.params
    const { department } = request.query
    const employee = await getEmployees(id,department)
    response.status(200).json(employee)
}

exports.insertEmployee = async (request, response) => {
    const { name, departmentId } = request.body
    const employee = await addEmployee({name,departmentId})
    response.status(200).json(employee)
}

exports.updateEmployee = async (request, response) => {
    const { id } = request.params
    const { name, departmentId } = request.body
    const employee = await updtEmployee(id, {name,departmentId})
    response.status(200).json(employee)
}

exports.deleteEmployee = async (request, response) => {
    const { id } = request.params
    const employee = await dltEmployee(id)
    response.status(204).send()
}