/*
Your htmlRoutes.js file should include two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.
*/

// Using express routes for modularirty for http route handling.
// See http://expressjs.com/en/guide/routing.html

var router = require("express").Router();
var path = require("path");


router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// 'catch-all' clause.  Display home page
router.all('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;
