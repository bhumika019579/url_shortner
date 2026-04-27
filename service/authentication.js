const jwt=require("jsonwebtoken");
const secret="bhumika@123";
function setuser(user){
    const payload={
         id: user.id,
        email: user.email,
        name: user.name

    };
    return jwt.sign(payload,secret,
        {expiresIn:'7d'}
    );
}
function getuser(token){
    if(!token) return null;
    try{
 return jwt.verify(token,secret);
    }
    catch(error){
return null;
    }
   
}
module.exports={
    setuser,
    getuser,
}