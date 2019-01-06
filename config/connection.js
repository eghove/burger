// ===REQUIREMENTS==================================================
//require the dotenv module
require("dotenv").config();

//loads the exported pieces from keys.js
const keys = require("./keys.js");

// import mysql library
let mysql = require("mysql");




//==THE DATABASE CONNECTION=========================================
// variable to store the connection
let connection;

// if deployed to heroku, use JAWS DB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // if deployed locally, use local database
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: keys.mySQL.secret,
        database: "burgers_db"
    });
}


// TODO: I'll need to refactor this to allow for jawsDB use on HEROKU

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// export the connection
module.exports = connection;