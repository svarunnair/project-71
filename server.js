const express=require("express")
const connection = require("./db")
const { userController } = require("./routes/user.route")
const { dataController } = require("./routes/data.route")
const authorization = require("./authorization/authorization")
const app=express()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('haii')
})


app.use("/signup",userController)
// app.use(authorization())

app.use("/data",dataController)



app.listen(1200,async()=>{
    try{
       await connection
       console.log('conected to DB')
    }
    catch(err){
        console.log(err)
    }
    console.log("server runnig at 1200")
})