import express from 'express'
import student from '../Model/EmployeeModel.js';
import user from '../Model/usermodel.js';


const EmpRouters=express.Router()


EmpRouters.get('/all', async(req,res)=>{
    const sogali=await student.find()
    res.send(sogali);

 })

 EmpRouters.get('/get', async(req,res)=>{
   const sogali=await user.find()
   res.send(sogali);

})

 EmpRouters.post('/add', async(req,res)=>{
    const kudar=await student({
       // Empl : "Hawa Jimale Mohamed",
       // MotherName:"Muslima Waasuge",
       // Adress:"Yaqshid",
       // Tell : 6188989,
       // Title:"Master",
       // Degree:"COA"
       Empl:req.body.Empl,
       MotherName: req.body.MotherName,
       Adress:req.body.Adress,
       Tell:req.body.Tell,
       sight:req.body.sight,
       gender:req.body.gender
 
    });
    await kudar.save()
    res.send("Saved Sucessfully")

});


 export default EmpRouters;