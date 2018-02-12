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
