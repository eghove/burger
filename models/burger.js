// IMPORT THE ORM
let orm = require("../config/orm.js");

// burger model object

let burger = {

    // function to display burgers
    displayBurgers: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },

    // function to add burgers
    addBurger: function(columns, values, callBack) {
        orm.insertOne("burgers", columns, values, function(res) {
            callBack(res);
        });
    },

    // function to devour a burger
    devourBurger: function(columnToChange, valueToChange, condition, callBack) {
        orm.updateOne("burgers", columnToChange, valueToChange, condition, function(res) {
            callBack(res);
        });
    }
}

// export the burger model

module.exports = burger; 