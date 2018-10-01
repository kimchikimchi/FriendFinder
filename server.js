// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
var app = require("express")();
var bodyParser = require("body-parser");
var path = require("path");

// Check env variable first for Heroku instance.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Using express routes for modularirty for http route handling.
// See http://expressjs.com/en/guide/routing.html
// htmlRoutes must come last due to catch-all clause in it
app.use('/api', require("./app/routing/apiRoutes.js"));
app.use('/', require("./app/routing/htmlRoutes"));


app.listen(PORT, function(){
    console.log(`Friend Finder listening on port ${PORT}!`)
});
