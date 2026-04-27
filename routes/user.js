const express=require('express');
const {handleusersignup,handleuserLogin}=require('../controllers/auth.js');
const route=express.Router();
route.post('/',handleusersignup);
route.post('/Login',handleuserLogin);
module.exports=route;