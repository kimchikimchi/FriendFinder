/*
our apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/
var router = require("express").Router();
var path = require("path");
// Import data model
var friends = require( path.join(__dirname, "..", "data", "friends") );

router.get('/friends', function(req, res) {
    res.json(friends);
});

/*
Sample req.body object
{ name: 'Jay',
  photo: 'face.html',
  scores: [ '1', '4', '3', '4', '3', '2', '4', '3', '2', '2' ] }
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = _5_
Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
*/
router.post('/friends', function(req, res, next) {
    // Handle survey result and handle compatibility logic here
    //console.log(req.body);
    var lowestScoreDiff = null;
    var friendMatched = null;

    // Compare current user's metrics against each of existing ones
    friends.forEach( function(friend) {
        var scoreDiff = 0;
        //console.log(friend.scores);
        //console.log(req.body.scores);
        for (var i = 0; i < friend.scores.length; i++) {
            scoreDiff += Math.abs(friend.scores[i] - req.body.scores[i]);
        }
        //console.log("scoreDiff is " + scoreDiff);
        //console.log("==================");
        // Set the first friend to the best match. After than, compare
        // scores.
        if (!friendMatched || ( lowestScoreDiff > scoreDiff )) {
            friendMatched = friend;
            lowestScoreDiff = scoreDiff;
        }
    });

    console.log(`Closest match is ${friendMatched.name} at ${lowestScoreDiff} in diffs`);
    res.json(friendMatched);
});

module.exports = router;
