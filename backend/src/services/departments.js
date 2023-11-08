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

exports.updateDepartments = async (id,data) => {
    let document = await this.getDepartments(id)
    if(typeof data.bossName == "undefined" || typeof data.bossId == "undefined"){
        document.bossName = ""
        document.bossId = ""
    }else{
        document.bossName = data.bossName
        document.bossId = data.bossId        
    }
    return Department.findOneAndReplace({_id:id},document,{returnDocument:"after"})
}