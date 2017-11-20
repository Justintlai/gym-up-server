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

// delete a workout
router.get("/:workoutId/destroy", function(req, res) {
  models.Workout.destroy({
    where: {
      workoutId: req.params.workoutId
    }
  }).then(function() {
    res.send("User Deleted");
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
    fields: ["name", "bodyPart", "videoURL"]
  })
    .then(function(insertedData) {
      console.log("Data Created!" + ": " + insertedData);
      res.send(insertedData);
      // res.redirect("/api/v1/workouts");
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

// Update a workout
router.put("/:workoutId/update", function(req, res) {
  console.log(req.body);
  models.Workout.update(req.body, {
    where: { workoutId: req.params.workoutId }
  }).then(updatedWorkout => {
    console.log(updatedWorkout);
    res.send(updatedWorkout);
  });
});
module.exports = router;
