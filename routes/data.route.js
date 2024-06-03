const {Router} =require('express')
const { DataModel } = require('../model/data.model')
const dataController=Router()

dataController.post("/",async(req,res)=>{
    const {name,age,location,number}=req.body
    const data=await DataModel({
        name,
        age,
        location,
        number
    })
    try{
        await data.save()
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

module.exports={dataController}