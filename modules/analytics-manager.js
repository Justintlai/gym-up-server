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
                where: { "$sessionMaster.userId$": req.body.userId }
            },
            { raw: true }
        )
        .then(sessions => {
            res.send(sessions);
        });
};
