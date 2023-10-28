const Department = require("../models/departments")

exports.getDepartments = (id) => {
    console.log("ID",id)
    if(typeof id != "undefined"){
        return Department.findOne({_id:id})
    }else{
        return Department.find()
    }
}