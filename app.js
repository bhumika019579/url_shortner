const express = require("express");
const route = require('./routes/urlroutes.js');
const path=require('path');
const cookieParser=require('cookie-parser');
const {restrictToLoggedinUserOnly}=require('./middlewares/auth.js');
const staticRouter=require('./routes/staticRouter.js');
const userRoute=require('./routes/user.js');
const methodOverride = require('method-override');
const app = express(); 
app.set('view engine',"ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use("/user",userRoute);
app.use("/",staticRouter);

app.use('/',route); 
app.use((err, req, res, next) => {
    if(err.type === 'entity.parse.failed') {
        return res.status(400).json({ error: 'Invalid JSON format' });
    }
    next(err);
});

module.exports = app; 