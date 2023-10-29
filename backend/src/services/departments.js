const Department = require("../models/departments")

exports.getDepartments = (id) => {
    if(typeof id != "undefined"){
        return Department.findOne({_id:id})
    }else{
        return Department.find()
    }
}

exports.createDepartments = (data) => {
    return Department.create(data)
}