/* eslint-disable semi */
// ===REQUIREMENTS==================================================
// require the dotenv module
require('dotenv').config();

// loads the exported pieces from keys.js
var keys = require('./keys.js');

// import mysql library
var mysql = require('mysql');

// ==THE DATABASE CONNECTION=========================================
// variable to store the connection
var connection;

// if deployed to heroku, use JAWS DB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  // if deployed locally, use local database
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: keys.mySQL.secret,
    database: 'burgers_db'
  });
}

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id: ' + connection.threadId);
});

// export the connection
module.exports = connection;
