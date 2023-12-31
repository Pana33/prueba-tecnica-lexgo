const Employee = require("../models/employees")
const Department = require("../models/departments")
const strings = require("../strings")

exports.getEmployees = async (id,department) => {
    if(typeof id != "undefined"){
        let employeeSearched = await Employee.findById(id)
        let departmentSearched = await Department.findById(employeeSearched.departmentId)
        const { bossName, bossId } = departmentSearched
        let nameDepartment = departmentSearched.name
        const { _id, name, departmentId, createdAt, updatedAt } = employeeSearched
        let employeeFinded = {
            _id,
            name,
            departmentId,
            nameDepartment,
            bossName,
            bossId,
            createdAt,
            updatedAt,
        }
        return employeeFinded
    }else{
        let employeesList = []
        let employeesSearched
        if(typeof department === "undefined"){
            employeesSearched = await Employee.find()
        }else{
            try{
                employeesSearched = await Employee.find({departmentId:department})
            }catch{
                return employeesList
            }
        }
        for(let employeeToComplet of employeesSearched){
            let departmentSearched = await Department.findById(employeeToComplet.departmentId)
            const { bossName, bossId } = departmentSearched
            let nameDepartment = departmentSearched.name
            const { _id, name, departmentId, createdAt, updatedAt } = employeeToComplet
            let employeeFinded = {
                _id,
                name,
                departmentId,
                nameDepartment,
                bossName,
                bossId,
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