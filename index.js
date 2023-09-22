require("dotenv").config();
const  http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const server = http.createServer(app);
const db = require('./src/database/dbConnection');

// database
global.databaseModelsCommon = {};
global.databaseModels = {};
global.databaseConnectionForOrg = {};

app.use(bodyParser.urlencoded({
    limit: "500mb",
    parameterLimit: 1000000,
    extended: true
}))

app.use(bodyParser.json({
    limit: '500mb'
}));

app.use("/static", express.static("./static/"));
app.use(express.static(path.join(__dirname, "public")));

// Main Database Connection...
db.mainConnection();

server.listen(process.env.PORT || process.env.SERVERPORT, () => {
    console.log("Server is Listening on port no.", process.env.PORT || process.env.SERVERPORT)
})