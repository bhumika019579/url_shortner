const express = require("express");
const http = require("node:http");
const app = require("./app.js");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app); 

server.listen(PORT, () => {
    console.log("Everything's up?");
    console.log(`server started at PORT:${PORT}`)});