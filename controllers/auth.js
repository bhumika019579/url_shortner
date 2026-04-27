const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt=require('bcrypt');
const {setuser}=require('../service/authentication')
const validator=require('validator');
async function handleusersignup(req,res){
    const {name,email,password}=req.body;
        if(!validator.isEmail(email)) {
        return res.render('signup', { error: 'Please enter a valid email!' });
    }
     if(password.length < 8) {
        return res.render('signup', { error: 'Password must be at least 8 characters!' });
    }
    const HashedPassword=await bcrypt.hash(password,8);
    await prisma.user.create({
        data:{
            name,
            email,
            password:HashedPassword,

        }
    });
    return res.redirect('/Login');
}
async function handleuserLogin(req,res){
    const {email,password}=req.body;
    const user=await prisma.user.findUnique({
        where:{
            email
        }
    });
    if(!user) return res.render('login',{
        error:"User Not Found"
    });
    const isMatch= await bcrypt.compare(password,user.password);
    if (!isMatch) {
        return res.render('login', {
            error: "Invalid Password"
        });
    }
    
    const token=setuser(user);
    res.cookie('uid',token,{
          httpOnly: true,
    path: '/',
    });
    return res.redirect('/');
}
module.exports={handleusersignup,handleuserLogin};