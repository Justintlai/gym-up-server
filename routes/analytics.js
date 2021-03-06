var models = require("../models");
var express = require("express");
var router = express.Router();
var AM = require("../modules/analytics-manager");

//default route to get Session
// /api/v1/analytics
//chart session intensity over time
router.get("/sessions", function(req, res) {
    console.log("Request: Chart user sessions!");
    var user = req.user;

    if (!user) {
        return res.status(400).send({
            status: 400,
            message: "No user id specified"
        });
    }
    AM.sessionData(user.id, function(data) {
        console.log(data);
        res.status(200).send({
            status: 200,
            message: "Sessions Data!",
            data: data
        });
    });
});

//chart the for each workout =  weight*reps*sets over time
router.get("/workout/:workoutId", function(req, res) {
    console.log("Request: Chart user workouts");
    var user = req.user;
    var workoutId = req.params.workoutId;
    if (!user) {
        return res.status(400).send({
            status: 400,
            message: "No user id specified"
        });
    } else if (!workoutId) {
        return res.status(400).send({
            status: 400,
            message: "No Workout id specified"
        });
    }
    AM.workoutData(user.id, workoutId, function(data) {
        console.log(data);
        res.status(200).send({
            status: 200,
            message: "Workout Data!",
            data: data
        });
    });
});

//Key stats for a particular exercise: MAX(weight * reps * sets), AVG(weight * reps * sets), MIN(weight * reps * sets) , RECENT(w*r*s)
router.get("/stats", (req, res) => {
    console.log("Request: Chart Stats");
    AM.workoutStats(function(data) {
        console.log(data);
        res.status(200).send({
            status: 200,
            message: "Stats!",
            data: data
        });
    });
});

//Count of bodyPart
router.get("/muscleGroup", (req, res) => {
    console.log("Request: Chart muscle Group");
    AM.workoutMuscleGroup(function(data) {
        console.log(data);
        res.status(200).send({
            status: 200,
            message: "Stats!",
            data: data
        });
    });
});

module.exports = router;
