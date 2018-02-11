var models = require("../models");
var express = require("express");
var router = express.Router();
var DM = require("../modules/data-manager");
/**
 * ========================================================
 * GET a list of workouts that the current user has created
 * ========================================================
 * */
router.get("/", function(req, res) {
  console.log("Request: Get All Workouts! ");

  DM.getAllWorkouts(function(workouts, err) {
    if (workouts) {
      res
        .status(200)
        .send({ status: 200, message: "All Workouts!", workouts: workouts });
    } else {
      res.status(400).send({ status: 400, message: err });
    }
  });
});

/**
 * ========================================================
 * POST a workout
 * ========================================================
 * */
router.post("/", (req, res) => {
  console.log("POST: CREATE NEW WORKOUT!");
  
  var post = req.body;
  newData = {};
  if (post.name) newData.name = post.name;
  if (post.bodyPart) newData.bodyPart = post.bodyPart;
  if (post.description) newData.description = post.description;
  if (post.videoURL) newData.videoURL = post.videoURL;

  DM.createWorkout(newData, function(workout){
    res.status(200).send({
      status:200,
      message:"Workout Created",
      workout: workout
    }); 
  });
});
/**
 * ========================================================
 * UPDATE a workout
 * ========================================================
 * */
router.put("/:workoutId", (req,res)=>{
  console.log("PUT: UPDATE WORKOUT");
  var workoutId = req.params.workoutId;
  if(!workoutId){
      return res
        .status(400)
        .send({
          status: 400,
          message: "No session id specified"
        });
  }
  var post = req.body;
  newData = {};
  if (post.name) newData.name = post.name;
  if (post.bodyPart) newData.bodyPart = post.bodyPart;
  if (post.description) newData.description = post.description;
  if (post.videoURL) newData.videoURL = post.videoURL;
  DM.updateWorkout(workoutId, newData, function(workout, err){
    if(workout){
      res.status(200).send({
        status:200,
        message:"Workout Updated!",
        workout: workout
      }); 
    } else {
      console.log(err);
      res.status(400).send({ status: 400, message: err });
    }
  });
});


/**
 * ========================================================
 * DELETE a workout
 * ========================================================
 * */
router.delete("/:workoutId", function(req, res) {
  console.log("DELETE: DESTROY WORKOUT");  
  var workoutId = req.params.workoutID;
  if(!workoutId){
    return res
      .status(400)
      .send({
        status: 400,
        message: "No Workout id specified"
      });
  }

  DM.deleteWorkout(workoutId, function(deletedWorkout){
    if (deletedSession) {
      res.status(200).send({ status: 200, message: "Deleted Workout" });
    } else {
      res
        .status(400)
        .send({
          status: 400,
          message: "Can't delete Workout"
        });
    }
  });
});
module.exports = router;
