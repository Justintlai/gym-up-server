var models = require("../models");
var express = require("express");
var router = express.Router();

//default route to get workouts
router.get("/", function(req, res) {
  console.log("Request: Get All Workouts!");
  models.Workout.findAll({ raw: true }).then(function(workouts) {
    res.send(workouts);
  });
});

//CREATE Workout
router.post("/", function(req, res) {
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

// UPDATE a workout
router.put("/:workoutId", function(req, res) {
  console.log(req.body);
  models.Workout.update(req.body, {
    where: { workoutId: req.params.workoutId }
  }).then(updatedWorkout => {
    console.log(updatedWorkout);
    res.send(updatedWorkout);
  });
});

// DELETE a workout
router.delete("/:workoutId", function(req, res) {
  models.Workout.destroy({
    where: {
      workoutId: req.params.workoutId
    }
  }).then(function() {
    res.send("User Deleted");
  });
});
module.exports = router;
