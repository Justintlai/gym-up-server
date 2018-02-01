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
    res
      .status(200)
      .send({ status: 200, message: "All Session!", sessions: sessions });
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
    res
      .status(200)
      .send({ status: 200, message: "User Sessions!", session: session });
  });
});
/**
 * POST INSERT the information about the sessionMaster
 *
 * in the request body include something like the following
 *
 * {
        "userId": 7,
        "sessionName": "This is a session",
        "start": "2017-01-01T15:24:00.000Z",
        "finish": "2017-01-01T17:49:00.000Z",
        "comments": "awesome workout",
 * }
 *
 * */
router.post("/", (req, res) => {
  console.log("Request: Post session master");
  var user = req.user;
  console.log("user id", user.id);

  newData = {};
  if (post.sessionName) newData.sessionName = post.sessionName;
  if (post.Intensity) newData.Intensity = post.Intensity;
  if (post.start) newData.start = post.start;
  if (post.finish) newData.finish = post.finish;
  if (post.comments) newData.comments = post.comments;

  DM.createSession(user.id, newData, function(session) {
    res.status(200).send({
      status: 200,
      message: "Posted!",
      sessionMaster: session
    });
  });
});
/**
 * POST INSERT the information about the sessionDetail
 *
 * in the request body include something like the following
 *
 * {
        "sessionMasterId": "30",
        "workoutId": "8",
        "workoutOrder": "1",
        "reps": "30",
 * }
 *
 * */
router.post("/:sessionId", (req, res) => {
  console.log("Request: Post session detail");
  var user = req.user;
  var sessionId = req.params.sessionId;
  console.log("user id", user.id);

  var newData = {};
  if (post.workoutId) newData.workoutId = post.workoutId;
  if (post.workoutOrder) newData.workoutOrder = post.workoutOrder;
  if (post.reps) newData.reps = post.reps;
  if (post.weight) newData.finish = post.weight;

  DM.createSessionDetail(user.id, sessionId, newData, function(session, err) {
    console.log(err);
    if (session) {
      res.status(200).send({
        status: 200,
        message: "Posted!",
        sessionDetail: session
      });
    } else {
      res.status(400).send({ status: 400, message: err });
    }
  });
});

/**
 * PUT update the information about the sessionMaster
 *
 * in the request body include something like the following
 *
 * {
 *      "make": "Ferrari",
 *      "model": "FF",
 *      "color": "White",
 *      "licensePlate": "NiceAF"
 * }
 *
 * */
router.put("/:sessionId", (req, res) => {
  console.log("Request: Post session master");
  var user = req.user;
  var sessionId = req.params.sessionId;
  console.log("user id", user.id);

  if (!sessionId) {
    return res
      .status(400)
      .send({ status: 400, message: "No session id specified" });
  }

  //create session data
  var post = post;
  var newData = {};
  if (post.sessionName) newData.sessionName = post.sessionName;
  if (post.Intensity) newData.Intensity = post.Intensity;
  if (post.start) newData.start = post.start;
  if (post.finish) newData.finish = post.finish;
  if (post.comments) newData.comments = post.comments;

  DM.updateSession(user.id, sessionId, newData, function(session, err) {
    console.log(err);
    if (session) {
      res.status(200).send({ status: 200, sessionMaster: session });
    } else {
      res.status(400).send({ status: 400, message: err });
    }
  });
});

// //CREATE sessionMaster
// router.post("/sessionmaster", function(req, res) {
//     console.log("Post: Create New session!");
//     console.log("this is post", post);

//     models.sessionMaster
//         .create(post, {
//             fields: [
//                 "userId",
//                 "sessionName",
//                 "intensity",
//                 "start",
//                 "finish",
//                 "comments"
//             ]
//         })
//         .then(function(insertedSessionMaster) {
//             console.log(
//                 "Session Master Created!" +
//                     insertedSessionMaster.get({ plain: true })
//             );
//             res.send(insertedSessionMaster.get({ plain: true }));
//         })
//         .catch(function(error) {
//             console.log(error);
//             res.send(error);
//         });
// });

// //CREATE sessionDetail
// router.post("/sessiondetail", function(req, res) {
//     console.log("Post: Create New sessionDetail!");
//     console.log("this is post", post);

//     models.sessionDetail
//         .create(post, {
//             fields: [
//                 "sessionMasterId",
//                 "workoutId",
//                 "workoutOrder",
//                 "reps",
//                 "weight"
//             ]
//         })
//         .then(function(insertedSessionDetail) {
//             console.log(
//                 "Session Detail Created!" +
//                     insertedSessionDetail.get({ plain: true })
//             );
//             res.send(insertedSessionDetail.get({ plain: true }));
//         })
//         .catch(function(error) {
//             console.log(error);
//             res.send(error);
//         });
// });

// // UPDATE a SessionMaster
// router.put("/sessionmaster/:sessionMasterid", function(req, res) {
//     console.log(post);
//     models.sessionMaster
//         .update(post, {
//             where: { sessionMasterid: req.params.sessionMasterid }
//         })
//         .then(updatedSessionMaster => {
//             console.log(updatedSessionMaster);
//             res.send(updatedSessionMaster);
//         });
// });

// // UPDATE a SessionDetail
// router.put("/sessiondetail/:sessionDetailid", function(req, res) {
//     console.log(post);
//     models.sessionDetail
//         .update(post, {
//             where: { sessionDetailid: req.params.sessionDetailid }
//         })
//         .then(updatedSessionDetail => {
//             console.log(updatedSessionDetail);
//             res.send(updatedSessionDetail);
//         });
// });

// //DELETE a SessionMaster
// router.delete("/sessionmaster/:sessionMasterid", function(req, res) {
//     const masterId = req.params.sessionMasterid;
//     models.sessionDetail
//         .destroy({
//             where: {
//                 sessionMasterid: masterId
//             }
//         })
//         .then(() => {
//             //Destroy SessionMaster WHERE SessionMasterID
//             models.sessionMaster
//                 .destroy({
//                     where: {
//                         sessionMasterid: masterId
//                     }
//                 })
//                 .then(() => {
//                     res.send("session master deleted!");
//                 });
//         });
// });

// //DELETE a SessionMaster
// router.delete("/sessiondetail/:sessiondetailid", function(req, res) {
//     models.sessionDetail
//         .destroy({
//             where: {
//                 sessiondetailid: req.params.sessiondetailid
//             }
//         })
//         .then(() => {
//             res.send("SessionDetail Deleted");
//         });
// });

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
//         where: { userId: post.userId }
//       },
//       { raw: true }
//     )
//     .then(function(sessions) {
//       res.send(sessions);
//     });
// });
