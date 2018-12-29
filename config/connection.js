// ===REQUIREMENTS==================================================
let mysql = require("mysql");

//==THE DATABASE CONNECTION=========================================
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.mySQL.secret,
    database: "burgers_db"
});

// TODO: I'll need to refactor this to allow for jawsDB use on HEROKU

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    } 
    console.log("connected as id: " + connection.threadId);
});

// export the connection
module.exports = connection;