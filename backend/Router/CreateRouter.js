import express from 'express'
import data from '../data.js';
import student from '../Model/EmployeeModel.js'
import user from '../Model/usermodel.js'


const CreateRouter=express.Router();

CreateRouter.get('/', async(req,res)=>{
    await student.remove({})

    const  xog=await student.insertMany(data.emp)
    res.send({xog});
})

CreateRouter.get('/create', async(req,res)=>{
    await user.remove({})

    const  soaqi=await user.insertMany(data.users)
    res.send({soaqi});
})

export default CreateRouter;