const { mongoose } = require("./mongoose")
const { Schema } = mongoose
const strings = require("../strings")

const employeeSchema = new Schema(
    {
        name:{
            type:String,
            required: true,
            lowercase:true,
        },
        departmentId:{
            type:Schema.Types.ObjectId,
            ref:strings.DEPARTMENT_DB,
            required: true,
        }
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model(strings.EMPLOYEE_DB,employeeSchema)