const express = require("express");
const http = require("node:http");
const app = require("./app.js");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app); 

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started at PORT:${PORT}`);
});