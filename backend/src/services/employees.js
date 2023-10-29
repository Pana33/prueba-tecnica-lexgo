const Employee = require("../models/employees")

exports.getEmployees = (id) => {
    if(typeof id != "undefined"){
        return Employee.findOne({_id:id})
    }else{
        return Employee.find()
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