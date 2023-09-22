require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// all databaseSchema....
const User = require("./models/UserModel").user;

class DatabaseHelper {
    mainConnection() {
        mongoose.Promise = global.Promise;
        // mongoose.set("useNewUrlParser", true);
        // mongoose.set("useUnifiedTopology", true);
        // mongoose.set("useCreateIndex", true);
        // mongoose.set("useFindAndModify", false);

        mongoose.connect(process.env.DATABASE_CONNECTION).then(()=> {
            console.log("Connected to Main DB");
            databaseModelsCommon = {
                user: mongoose.connection.model("User", User)
            }
            databaseModels = {...databaseModelsCommon};
        },
        err => {console.error("Error: connecting main DB", err);}
        )
    }
}

module.exports = new DatabaseHelper();