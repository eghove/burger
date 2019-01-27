/* eslint-disable semi */
// REQUIREMENTS

// Require express
var express = require('express');

// set up the port
var PORT = process.env.PORT || 8080;

// initiate express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// middleware to deal with JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET HANDLEBARS as a variable called hbars
var hbars = require('express-handlebars');

// initiate handlebars, tell it where to find the main.handlebars page
app.engine('handlebars', hbars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

// IMPORT ROUTES
var routes = require('./controllers/burgers_controller.js');

// give the server access to the routes
app.use(routes);

// START THE SERVER
app.listen(PORT, function () {
  // log server side when the server starts
  console.log('Server listening on: http://localhost:' + PORT);
})
