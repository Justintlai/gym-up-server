var models = require("../models");
var express = require("express");
var router = express.Router();

//default route to get Session
// /api/v1/session
router.get("/", function(req, res) {
  console.log("Request: Get All SESSIONS!");
  models.sessionMaster.findAll({ raw: true }).then(function(sessions) {
    res.send(sessions);
  });
});

//CREATE sessionMaster
router.post("/sessionmaster/create", function(req, res) {
  console.log("Post: Create New session!");
  console.log("this is req.body", req.body);

  models.sessionMaster
    .create(req.body, {
      fields: ["intensity", "start", "finish", "comments"]
    })
    .then(function(insertedSessionMaster) {
      console.log(
        "Session Master Created!" + insertedSessionMaster.get({ plain: true })
      );
      res.send(insertedSessionMaster.get({ plain: true }));
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

//CREATE sessionDetail
router.post("/sessiondetail/create", function(req, res) {
  console.log("Post: Create New sessionDetail!");
  console.log("this is req.body", req.body);

  models.sessionDetail
    .create(req.body, {
      fields: ["sessionMasterID", "workoutID", "wokroutOrder", "reps", "weight"]
    })
    .then(function(insertedSessionDetail) {
      console.log(
        "Session Detail Created!" + insertedSessionDetail.get({ plain: true })
      );
      res.send(insertedSessionDetail.get({ plain: true }));
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

// UPDATE a SessionMaster
router.put("/sessionmaster/:sessionMasterid/update", function(req, res) {
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
router.put("/sessiondetail/:sessionDetailid/update", function(req, res) {
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
router.get("/:sessionMasterid/destroy", function(req, res) {
  const masterId = req.params.sessionMasterid;
  models.sessionDetail
    .destroy({
      where: {
        sessionMasterid: masterId
      }
    })
    .then(() => {
      //Destroy SessionMaster WHERE SessionMasterID
      models.sessionMaster.destroy({
        where: {
          sessionMasterid: masterId
        }
      });
    });
});

//DELETE a SessionMaster
router.get("/:sessiondetailid/destroy", function(req, res) {
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
