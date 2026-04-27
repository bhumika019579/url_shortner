const express = require("express");
const {handlegeneratenewshorturl,handleurl,handlegetallurls,handleGetAnalytics,handleDelete} = require("../controllers/urlcontroller");
const {restrictToLoggedinUserOnly} = require('../middlewares/auth');
const route = express.Router();

route.post('/',restrictToLoggedinUserOnly, handlegeneratenewshorturl);
route.get('/urls', handlegetallurls);
route.get('/analytics/:shortid', handleGetAnalytics);
route.get('/:shortid', handleurl);
route.delete('/:shortid',restrictToLoggedinUserOnly, handleDelete);


 
module.exports = route;