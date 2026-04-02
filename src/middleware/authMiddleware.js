const jwt = require('jsonwebtoken');
const protect = (req,res,next)=>{
    let token ;
    console.log("auth middleware called");
    console.log("headers", req.headers);
    console.log("authorization header", req.headers.authorization);
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer '))
    {
        try{
          token = req.headers.authorization.split(" ")[1];//returns array[1] index value
          console.log("token created", token);
          const decoded=jwt.verify(token,process.env.JWT_SECRET);
           console.log("token after verification", decoded);
          req.user=decoded;// attach user info to  request
          next(); // allows request to cotinue

        }catch(error)
        {
            return res.status(401).json({message: " Token invalid"});
        }
    }
    if(!token){
        return res.status(401).json({message: ' Token invalid , authorization denied'});
    }
};
module.exports = protect;