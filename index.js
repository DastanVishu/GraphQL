require("dotenv").config();
const  http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

server.listen(process.env.PORT || process.env.SERVERPORT, () => {
    console.log("Server is Listening on port no.", process.env.PORT || process.env.SERVERPORT)
})