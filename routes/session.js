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
router.get("/", function (req, res) {
  console.log("Request: Get All SESSIONS for a user! ");
  var user = req.user;
  console.log("user id: ", user.id);

  DM.getAllSessions(user.id, function (sessions) {
    res
      .status(200)
      .send({
        status: 200,
        message: "All Session!",
        sessions: sessions
      });
  });
});

/**
 * ========================================================
 * GET specific session
 * ========================================================
 * */
router.get("/:sessionId", function (req, res) {
  console.log("Request:Get session! ");
  var sessionId = req.params.sessionId;
  var user = req.user;
  console.log("user id: ", user.id);
  console.log("session id: ", req.params.sessionId);

  DM.getSession(user.id, sessionId, function (session) {
    console.log(session);
    res
      .status(200)
      .send({
        status: 200,
        message: "User Sessions!",
        session: session
      });
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
  console.log("req body", req.body);
  console.log("SESSION NAME: ", req.body.sessionName);

  var post = req.body;
  newData = {};
  if (post.sessionName) newData.sessionName = post.sessionName;
  if (post.intensity) newData.intensity = post.intensity;
  if (post.start) newData.start = post.start;
  if (post.finish) newData.finish = post.finish;
  if (post.comments) newData.comments = post.comments;
  console.log("newData: ", newData);

  DM.createSession(user.id, newData, function (session) {
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
  console.log("reqy.body ", req.body);

  var post = req.body;
  var newData = {};
  if (post.workoutOrder) newData.workoutOrder = post.workoutOrder;
  if (post.workoutId) newData.workoutId = post.workoutId;
  if (post.reps) newData.reps = post.reps;
  if (post.weight) newData.weight = post.weight;

  DM.createSessionDetail(user.id, sessionId, newData, function (session, err) {
    console.log(err);
    if (session) {
      res.status(200).send({
        status: 200,
        message: "Posted!",
        sessionDetail: session
      });
    } else {
      res.status(400).send({
        status: 400,
        message: err
      });
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
  console.log("Request: UPDATE session master");
  var user = req.user;
  var sessionId = req.params.sessionId;
  console.log("user id", user.id);

  if (!sessionId) {
    return res
      .status(400)
      .send({
        status: 400,
        message: "No session id specified"
      });
  }

  //create session data
  var post = req.body;
  var newData = {};
  if (post.sessionName) newData.sessionName = post.sessionName;
  if (post.intensity) newData.intensity = post.intensity;
  if (post.start) newData.start = post.start;
  if (post.finish) newData.finish = post.finish;
  if (post.comments) newData.comments = post.comments;

  DM.updateSession(user.id, sessionId, newData, function (session, err) {
    if (session) {
      res.status(200).send({
        status: 200,
        sessionMaster: session
      });
    } else {
      console.log(err);
      res.status(400).send({
        status: 400,
        message: err
      });
    }
  });
});

/**
 * PUT update the information about the session Detail
 *
 * in the request body include something like the following
 *
 * {
        "workoutId": 23 ;
        "workoutOrder": 2;
        "reps": 23;
        "weight": 55;
 * }
 *
 * */
router.put("/:sessionId/:sessionDetailId", (req, res) => {
  console.log("Request: UPDATE session master");
  var user = req.user;
  var sessionDetailId = req.params.sessionDetailId;
  console.log("user id", user.id);
  console.log("sessionDetailId: ", sessionDetailId);

  if (!sessionDetailId) {
    return res
      .status(400)
      .send({
        status: 400,
        message: "No session detail id specified"
      });
  }
  //create session detail data
  var post = req.body;
  var newData = {};
  if (post.workoutId) newData.workoutId = post.workoutId;
  if (post.workoutOrder) newData.workoutOrder = post.workoutOrder;
  if (post.reps) newData.reps = post.reps;
  if (post.weight) newData.weight = post.weight;

  DM.updateSessionDetail(user.id, sessionDetailId, newData, function (session, err) {
    if (session) {
      res.status(200).send({
        status: 200,
        sessionDetail: session
      });
    } else {
      console.log(err);
      res.status(400).send({
        status: 400,
        message: err
      });
    }
  });
});

/**
 * DELETE update the information about the sessionMaster
 * */
router.delete("/:sessionId", (req, res) => {
  console.log("Request: DELETE session master");
  var user = req.user;
  var sessionId = req.params.sessionId;

  if (!sessionId) {
    return res.status(400).send({
      status: 400,
      message: "No session id specified"
    });
  }

  DM.deleteSession(user.id, sessionId, function (deletedSession) {
    if (deletedSession) {
      res.status(200).send({
        status: 200,
        message: "Deleted Session"
      });
    } else {
      res.status(400).send({
        status: 400,
        message: "Can't delete Session"
      });
    }
  })
});

/**
 * DELETE update the information about the sessionMaster
 * */
router.delete("/:sessionId/:sessionDetailId", (req, res) => {
  console.log("Request: DELETE session detail");
  var user = req.user;
  var sessionDetailId = req.params.sessionDetailId;

  if (!sessionDetailId) {
    return res.status(400).send({
      status: 400,
      message: "No session id specified"
    });
  }
  DM.deleteSessionDetail(user.id, sessionDetailId, function (deletedSession) {
    if (deletedSession) {
      res.status(200).send({
        status: 200,
        message: "Deleted Session Detail"
      });
    } else {
      res.status(400).send({
        status: 400,
        message: "Can't delete Session Detail"
      });
    }
  })
});

module.exports = router;
