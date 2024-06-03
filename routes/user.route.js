const {Router} =require('express')
const { UserModel } = require('../model/user.model')
require('dotenv').config() 
const userController=Router()
var jwt = require('jsonwebtoken');


userController.post('/',async(req,res)=>{
    const {userName,email,password}=req.body
    console.log('object',req)
    const user=await UserModel({
        userName,
        email,
        password
    })
    try{
        await user.save()
        res.send(user)
    }
    catch(err){
        console.log(err)
    }
})



userController.post('/signin',async(req,res)=>{
    const {userName,password}=req.body
    const user= await UserModel.findOne({userName})
    if(user){
        const token = jwt.sign({ username:userName }, process.env.SECRET_CODE);
        res.send({token})   
    }
    else{
        res.send("please login")
    }
})


module.exports={userController}