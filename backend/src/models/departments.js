const { mongoose } = require("./mongoose")

const departmentScheema = new mongoose.Schema(
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
            type:mongoose.Types.ObjectId,
            ref:"employee"
        }
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model("department",departmentScheema)