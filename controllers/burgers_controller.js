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
    
})

// 2. POST route that lets the user add a burger to our app

// 3. PUT (or update) route that lets the user devour a burger




// EXPORT THE ROUTES (for use by server.js)
module.exports = router;