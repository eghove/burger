// CONTROLLER FOR THE BURGER APP

// REQUIREMENTS AND DEPENDENCIES

// import express
const express = require("express");

// import burger model
const burger = require("../models/burger.js");

// INSTANTIATE THE ROUTER
let router = express.Router();

// THE ROUTES

// 1. GET route that displays both burgers and devoured burgers
router.get("/", function(req, res) {
    // query the database
    burger.displayBurgers(function(data) {
        // pass the results of the query to this handlebars object
        let hbarsObj = {
            burgers: data
        };
        // log the result server side
        console.log(hbarsObj);
        // pass the handlebars object to index.handlebars
        res.render("index", hbarsObj);
    });
});

// 2. POST route that lets the user add a burger to our app
router.post("/api/burgers", function(req, res) {
    // add the new burger to the database
    burger.addBurger(["burger_name"], [req.body.burger_name], function(result) {
        res.status(200).end();
    })
});

// 3. PUT (or update) route that lets the user devour a burger




// EXPORT THE ROUTES (for use by server.js)
module.exports = router;