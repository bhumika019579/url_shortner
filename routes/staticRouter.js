const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {getuser}=require('../service/authentication');
const route = express.Router();

route.get('/', async (req, res) => {
    const sessionId=req.cookies.uid;
    const user=getuser(sessionId);
      if(!user) return res.redirect('/Login')
    const allUrls = await prisma.url.findMany({
        where:{userId:user.id},
        include: {
            _count: {
                select: { visithistory: true }
            }
        }
    });
    return res.render('home', { urls: allUrls });
});
route.get('/signup',(req,res)=>{
    return res.render("signup");
});
route.get('/Login',(req,res)=>{
    return res.render("Login");
});
route.get('/logout', (req, res) => {
    res.clearCookie('uid');
    return res.redirect('/Login');
});

module.exports = route;