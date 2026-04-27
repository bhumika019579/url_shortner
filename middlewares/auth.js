const {getuser}=require('../service/authentication')
async function restrictToLoggedinUserOnly(req,res,next){
    const token=req.cookies.uid
    if(!token) return res.redirect('/Login');
const user=getuser(token);
if(!user) return res.redirect("/Login");
req.user=user;
next();
}
module.exports={
    restrictToLoggedinUserOnly,
}