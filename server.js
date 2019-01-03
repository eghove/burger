// REQUIREMENTS

// Require express
const express = require("express");

// set up the port
const PORT = process.env.PORT || 8080;

// initiate express
const app = express();

// middleware to deal with JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET HANDLEBARS as a variable called hbars
const hbars = require("express-handlebars");

// initiate handlebars, tell it where to find the main.handlebars page
app.engine("handlebars", hbars ({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// IMPORT ROUTES
const routes = require("./controllers/burgers_controller.js");

// give the server access to the routes
// TODO: need to get the routes set up and then I can remove comments to section below.
// app.use(routes);

// START THE SERVER
app.listen(PORT, function () {
    // log server side when the server starts
    console.log("Server listening on: http://localhost:" + PORT);
})

