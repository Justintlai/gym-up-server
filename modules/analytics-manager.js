var models = require("../models");

exports.sessionData = function(userId, callback) {
    models.sessionMaster
        .findAll(
            {
                attributes: ["start", "intensity"],
                include: [
                    {
                        model: models.sessionDetail,
                        attributes: [],
                        required: true
                    },
                    { model: models.User, attributes: [], required: true }
                ],
                where: { "$sessionMaster.userId$": userId }
            },
            { plain: true }
        )
        .then(sessions => {
            callback(sessions);
        });
};

exports.workoutData = function(userId, workoutId, callback) {
    models.sessionMaster
        .findAll(
            {
                where: {
                    $and: [
                        { "$sessionDetails.workoutId$": workoutId },
                        { "$sessionMaster.userId$": userId }
                    ]
                },
                attributes: ["start"],
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
                    { model: models.User, attributes: [], required: true }
                ]
            },
            { plain: true }
        )
        .then(workouts => {
            callback(workouts);
        });
};

exports.workoutStats = function(callback) {
    models.sequelize
        .query(
            "SELECT SM.`id`,(SD.`weight` * SD.`reps`) AS TotalWeight FROM `sessionMasters` AS SM INNER JOIN `sessionDetails` SD ON SM.`id` = SD.`sessionMasterId`",
            {
                type: models.sequelize.QueryTypes.SELECT
            }
        )
        .then(data => {
            callback(data);
        });
};

exports.workoutMuscleGroup = function(callback) {
    models.sequelize
        .query(
            "SELECT COUNT(`bodyPart`) AS Count, `bodyPart` FROM `sessionMasters` AS SM INNER JOIN `sessionDetails` SD ON SM.`id` = SD.`sessionMasterId` INNER JOIN `Workouts` W ON W.`id` = SD.`WorkoutId` GROUP BY W.`bodyPart`",
            {
                type: models.sequelize.QueryTypes.SELECT
            }
        )
        .then(data => {
            callback(data);
        });
};
