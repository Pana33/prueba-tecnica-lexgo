const Employee = require("../models/employees")
const Department = require("../models/departments")
const strings = require("../strings")

exports.getEmployees = async (id) => {
    if(typeof id != "undefined"){
        let employeeSearched = await Employee.findById(id)
        let departmentSearched = await Department.findById(employeeSearched.departmentId)
        const { bossName } = departmentSearched
        let nameDepartment = departmentSearched.name
        const { _id, name, departmentId, createdAt, updatedAt } = employeeSearched
        let employeeFinded = {
            _id,
            name,
            departmentId,
            nameDepartment,
            bossName,
            createdAt,
            updatedAt,
        }
        return employeeFinded
    }else{
        let employeesList = []
        let employeesSearched = await Employee.find()
        for(let employeeToComplet of employeesSearched){
            let departmentSearched = await Department.findById(employeeToComplet.departmentId)
            const { bossName } = departmentSearched
            let nameDepartment = departmentSearched.name
            const { _id, name, departmentId, createdAt, updatedAt } = employeeToComplet
            let employeeFinded = {
                _id,
                name,
                departmentId,
                nameDepartment,
                bossName,
                createdAt,
                updatedAt,
            }
            employeesList.push(employeeFinded)
        }
        return employeesList
    }
}

exports.addEmployee = (employee) => {
    return Employee.create(employee)
}

exports.updtEmployee = (id,data) => {
    return Employee.findByIdAndUpdate(id,data,{returnDocument:"after"})
}

exports.dltEmployee = (id) => {
    return Employee.deleteOne({_id:id})
}