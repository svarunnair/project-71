const jwt =require("jsonwebtoken")

const authorization=(req,res,next)=>{
    const token= req.headers?.authorization?.split(' ')[1]
    if(!token){
        res.send("please login")
    }
    const  decoded = jwt.verify(token,process.env.SECRET_CODE);
    const user_id =decoded.user_id
    if(decoded){
        req.body.user_id=user_id
        next()
    }
    else{
        res.send("Please Login")
    }
}

module.exports = authorization