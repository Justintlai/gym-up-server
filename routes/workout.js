var models = require("../models");
var express = require("express");
var router = express.Router();

//default route to get workouts
router.get("/", function(req, res) {
  console.log("Request: Get All Workouts!");
  models.Workout.findAll().then(function(workouts) {
    res.send(workouts);
  });
});

router.get("/create", function(req, res) {
  console.log("Request: Serve up the Create New Workout Page");
  res.send(
    "<html><body><p>This is where you'd create a workout</p></body></html>"
  );
});

//a post the insert a new user
router.post("/create", function(req, res) {
  console.log("Post: Create New Workout!");
  //variable to hold the data that is templated inserted
  models.Workout.create(req.body, {
    //white list the fields that you want the user to be able to enter
    //(this prevents malicious workouts from entering data that shouldn't be modified)
    fields: ["name", "bodyPart", "videoURL"]
  })
    .then(function(insertedData) {
      console.log("Data Created!" + ": " + insertedData);
      res.redirect("/api/v1/workouts");
    })
    .catch(function(error) {
      console.log(error);
    });
});
module.exports = router;
