const { mongoose } = require("./mongoose")
const { Schema } = mongoose
const strings = require("../strings")

const departmentScheema = new Schema(
    {
        name:{
            type:String,
            unique: true,
            required: true,
            lowercase:true,
        },
        bossName:{
            type:String,
            required: false,
            lowercase:true,
        },
        bossId:{
            type:Schema.Types.ObjectId,
            ref:strings.EMPLOYEE_DB,
            required: false,
        }
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model(strings.DEPARTMENT_DB,departmentScheema)