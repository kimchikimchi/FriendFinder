/*
our apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

var router = require("express").Router();
// Import data model
var friends = require("../data/friends");

router.get('/friends', function(req, res) {
    res.json(friends);
});

router.post('/friends', function(res, res) {
    // Handle survey result and handle compatibility logic here
});

module.exports = router;
