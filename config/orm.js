/* eslint-disable semi */
// IMPORT MYSQL CONNECTION

var connection = require('../config/connection.js');

// HELPER FUNCTIONS FOR MYSQL SYNTAX

// function for passing the correct number of question marks into a sql query
function printQuestionMarks (number) {
  // create an empty array
  var arr = []

  // the for loop that will push the appropriate amount of question marks into the array
  for (var i = 0; i < number; i++) {
    arr.push('?');
  }

  // turn the array into a string and return it
  return arr.toString();
}

// Object for the SQL statement functions that will be exported
var orm = {

  // selectAll() function
  selectAll: function (tableInput, callBack) {
    var queryString = 'SELECT * FROM ' + tableInput;

    // pass the queryString to the sql database
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },

  // insertOne() function
  insertOne: function (tableInput, columnInput, valueToInsert, callBack) {
    var queryString = 'INSERT INTO ' + tableInput;
    queryString += ' (';
    queryString += columnInput.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(valueToInsert.length);
    queryString += ') ';

    // console log the queryString
    console.log(queryString);

    // pass the queryString to the sql database
    connection.query(queryString, valueToInsert, function (err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },

  // updateOne() function
  updateOne: function (tableInput, columnToChange, valueToChange, condition, callBack) {
    var queryString1 = 'UPDATE ' + tableInput;
    queryString1 += ' SET ' + columnToChange;
    queryString1 += '=' + valueToChange;
    queryString1 += ' WHERE ';
    queryString1 += condition;

    // console log the query string
    console.log(queryString1);

    // pass the queryString1 to the sql database
    connection.query(queryString1, function (err, result) {
      if (err) {
        throw err;
      }

      callBack(result);
    });
  }
};

// export orm object for model
module.exports = orm;
