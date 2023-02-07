import mongoose from  "mongoose";
const EmplSchema=mongoose.Schema({
    username:{type:String,require:true},
    password:{type:Number,require:true},

},{

timestamps:true
})


const user=mongoose.model("users",EmplSchema)

export default user;