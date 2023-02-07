import mongoose from  "mongoose";
const EmplSchema=mongoose.Schema({
    Empl:{type:String,require:true},
    MotherName:{type:String,require:true},
    Adress:{type:String,require:true},
    Tell:{type:Number,require:true},
    sight:{type:String,require:true},// sight
    gender:{type:String,require:true},//gender
},{

timestamps:true
})


const student=mongoose.model("student",EmplSchema)

export default student;

