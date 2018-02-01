var models = require("../models"); //should not require this when we move all business logic to data-manager (controller)
var express = require("express");
var router = express.Router();
var DM = require("../modules/data-manager");

/**
 * ----------------------------
 * API Route for Sessions
 * /api/v1/sessions
 * ----------------------------
 * */

/**
 * ========================================================
 * GET a list of sessions that the current user has created
 * ========================================================
 * */
router.get("/", function(req, res) {
    console.log("Request: Get All SESSIONS for a user! ");
    var user = req.user;
    console.log("user id: ", user.id);

    DM.getAllSessions(user.id, function(sessions) {
        res.status(200).send({ status: 200, sessions: sessions });
    });
});

/**
 * ========================================================
 * GET specific session
 * ========================================================
 * */
router.get("/:sessionId", function(req, res) {
    console.log("Request:Get session! ");
    var sessionId = req.params.sessionId;
    var user = req.user;
    console.log("user id: ", user.id);
    console.log("session id: ", req.params.sessionId);

    DM.getSession(user.id, sessionId, function(session) {
        console.log(session);
        res.status(200).send({ status: 200, session: session });
    });
});

//CREATE sessionMaster
router.post("/sessionmaster", function(req, res) {
    console.log("Post: Create New session!");
    console.log("this is req.body", req.body);

    models.sessionMaster
        .create(req.body, {
            fields: [
                "userId",
                "sessionName",
                "intensity",
                "start",
                "finish",
                "comments"
            ]
        })
        .then(function(insertedSessionMaster) {
            console.log(
                "Session Master Created!" +
                    insertedSessionMaster.get({ plain: true })
            );
            res.send(insertedSessionMaster.get({ plain: true }));
        })
        .catch(function(error) {
            console.log(error);
            res.send(error);
        });
});

//CREATE sessionDetail
router.post("/sessiondetail", function(req, res) {
    console.log("Post: Create New sessionDetail!");
    console.log("this is req.body", req.body);

    models.sessionDetail
        .create(req.body, {
            fields: [
                "sessionMasterId",
                "workoutId",
                "workoutOrder",
                "reps",
                "weight"
            ]
        })
        .then(function(insertedSessionDetail) {
            console.log(
                "Session Detail Created!" +
                    insertedSessionDetail.get({ plain: true })
            );
            res.send(insertedSessionDetail.get({ plain: true }));
        })
        .catch(function(error) {
            console.log(error);
            res.send(error);
        });
});

// UPDATE a SessionMaster
router.put("/sessionmaster/:sessionMasterid", function(req, res) {
    console.log(req.body);
    models.sessionMaster
        .update(req.body, {
            where: { sessionMasterid: req.params.sessionMasterid }
        })
        .then(updatedSessionMaster => {
            console.log(updatedSessionMaster);
            res.send(updatedSessionMaster);
        });
});

// UPDATE a SessionDetail
router.put("/sessiondetail/:sessionDetailid", function(req, res) {
    console.log(req.body);
    models.sessionDetail
        .update(req.body, {
            where: { sessionDetailid: req.params.sessionDetailid }
        })
        .then(updatedSessionDetail => {
            console.log(updatedSessionDetail);
            res.send(updatedSessionDetail);
        });
});

//DELETE a SessionMaster
router.delete("/sessionmaster/:sessionMasterid", function(req, res) {
    const masterId = req.params.sessionMasterid;
    models.sessionDetail
        .destroy({
            where: {
                sessionMasterid: masterId
            }
        })
        .then(() => {
            //Destroy SessionMaster WHERE SessionMasterID
            models.sessionMaster
                .destroy({
                    where: {
                        sessionMasterid: masterId
                    }
                })
                .then(() => {
                    res.send("session master deleted!");
                });
        });
});

//DELETE a SessionMaster
router.delete("/sessiondetail/:sessiondetailid", function(req, res) {
    models.sessionDetail
        .destroy({
            where: {
                sessiondetailid: req.params.sessiondetailid
            }
        })
        .then(() => {
            res.send("SessionDetail Deleted");
        });
});

module.exports = router;

// router.post("/", function(req, res) {
//   console.log("Request: Get All SESSIONS for a user!");
//   models.sessionMaster
//     .findAll(
//       {
//         attributes: [],
//         include: [
//           { model: models.sessionDetail, attributes: [] },
//           { model: models.User, attributes: [] }
//         ],
//         where: { userId: req.body.userId }
//       },
//       { raw: true }
//     )
//     .then(function(sessions) {
//       res.send(sessions);
//     });
// });
