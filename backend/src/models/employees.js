const { mongoose } = require("./mongoose")

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            lowercase:true,
        },
        departmentId:{
            type:mongoose.Types.ObjectId,
            ref:"department",
            required: true,
        }
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model("employee",employeeSchema)