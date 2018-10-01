// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var app = require("express")();
var bodyParser = require("body-parser");
var path = require("path");

var routeDir = path.join(__dirname, "app", "routing");
var apiRoutes = require( path.join(routeDir, "apiRoutes" ));
var htmlRoutes = require( path.join(routeDir, "htmlRoutes"));
// Check env variable first for Heroku instance.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Using express routes for modularirty for http route handling.
// See http://expressjs.com/en/guide/routing.html
// htmlRoutes must come last due to catch-all clause in it
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listening function should come last after all helper functions are in place
app.listen(PORT, function(){
    console.log(`Friend Finder listening on port ${PORT}!`)
});
