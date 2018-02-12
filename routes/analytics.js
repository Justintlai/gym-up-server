var models = require("../models");
var express = require("express");
var router = express.Router();
var AM = require("../modules/analytics-manager");

//default route to get Session
// /api/v1/analytics
//chart session intensity over time
router.post("/sessions", function(req, res) {
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
            message: "User Data!",
            data: data
        });
    });
});

//chart the for each workout =  weight*reps*sets over time
router.post("/workouts", function(req, res) {
    console.log("Request: Chart user workouts");
    models.sessionMaster
        .findAll(
            {
                where: {
                    $and: [
                        { "$sessionDetails.workoutId$": req.body.workoutId },
                        { "$sessionMaster.userId$": req.body.userId }
                    ]
                },
                arrtributes: ["start"],
                include: [
                    {
                        model: models.sessionDetail,
                        attributes: [
                            "reps",
                            "weight",
                            [
                                models.sequelize.fn(
                                    "COUNT",
                                    models.sequelize.col(
                                        "sessionDetails.sessionMasterId"
                                    )
                                ),
                                "sets"
                            ]
                        ],
                        required: true
                    },
                    {
                        model: models.User,
                        attributes: [],
                        required: true
                    }
                ]
            },
            { raw: true }
        )
        .then(workouts => {
            res.send(workouts);
        });
});

//Key stats for a particular exercise: MAX(weight * reps * sets), AVG(weight * reps * sets), MIN(weight * reps * sets) , RECENT(w*r*s)
router.post("/stats", (req, res) => {
    console.log("Request: Chart Stats");
    models.sequelize
        .query(
            "SELECT SM.`sessionMasterId`,(SD.`weight` * SD.`reps`) AS TotalWeight FROM `sessionMasters` AS SM INNER JOIN `sessionDetails` SD ON SM.`sessionMasterId` = SD.`sessionDetailId`",
            {
                type: models.sequelize.QueryTypes.SELECT
            }
        )
        .then(users => {
            res.send(users);
        });
});

//Count of bodyPart
router.post("/muscleGroup", (req, res) => {
    console.log("Request: Chart muscle Group");
    models.sequelize
        .query(
            "SELECT COUNT(`bodyPart`) AS Count, `bodyPart` FROM `sessionMasters` AS SM INNER JOIN `sessionDetails` SD ON SM.`sessionMasterId` = SD.`sessionDetailId` INNER JOIN `Workouts` W ON W.`workoutId` = SD.`WorkoutId` GROUP BY W.`bodyPart`",
            {
                type: models.sequelize.QueryTypes.SELECT
            }
        )
        .then(users => {
            res.send(users);
        });
});

router.get("/test", (req, res) => {
    models.sequelize
        .query("SELECT * FROM `Users`", {
            type: models.sequelize.QueryTypes.SELECT
        })
        .then(users => {
            res.send(users);
        });
});
module.exports = router;
