const mongoose=require("mongoose")
const dataSchema=mongoose.Schema({
    name:{type:String,required:true},
     age:{type:String,required:true},
      location:{type:String,required:true},
       number:{type:String,required:true},
})

const DataModel=mongoose.model('demo data',dataSchema)

module.exports={DataModel}