// IMPORT MYSQL CONNECTION

let connection = require("../config/connection.js");

// HELPER FUNCTIONS FOR MYSQL SYNTAX

// function for passing the correct number of question marks into a sql query
function printQuestionMarks(number) {
    // create an empty array
    let arr = []

    // the for loop that will push the appropriate amount of question marks into the array
    for (let i=0; i < number; i++) {
        arr.push("?");
    }

    // turn the array into a string and return it
    return arr.toString();
}

// function to convert object key/value pairs to sql syntanx
function objToSql(obj) {
    // create an empty array
    let arr = [];

    // loop thru the keys and push the key/value pair as a string into arr
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key = "=" + value);
        }
    }

    // translate array of strongs to a single comma-separated string
    return arr.toString();
}

// Object for the SQL statement functions that will be exported
let orm = {

    // selectAll() function
    selectAll: function(tableInput, callBack) {
        let queryString = "SELECT * FROM " + tableInput;

        // pass the queryString to the sql database
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },

    // insertOne() function
    insertOne: function(tableInput, columnInput, valueToInsert, callBack) {
        let queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += columnInput.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(valueToInsert.length);
        queryString += ") ";

        // console log the queryString
        console.log(queryString);

        // pass the queryString to the sql database
        connection.query(queryString, valueToInsert, function(err, result){
            if(err) {
                throw err;
            }
            callBack(result);
        });
    },

    // updateOne() function
    updateOne: function(tableInput, objColVals, condition, callBack) {
        let queryString = "UPDATE " + tableInput;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        // console log the query strong
        console.log(queryString);

        // pass the queryString to the sql database
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }

            callBack(result);
        });
    }
};

// export orm object for model
module.exports = orm;