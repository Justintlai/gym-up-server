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

router.get("/create", function(req, res) {
  console.log("Request: Serve up the Create New Session Page");
  res.send("Create a new session");
});

//a post the insert a new session
router.post("/create", function(req, res) {
  console.log("Post: Create New session!");
  console.log("this is req.body", req.body);
  models.sessionMaster
    .create(req.body, {
      fields: ["intensity", "start", "finish", "comments"]
    })
    .then(function(insertedSessionMaster) {
      console.log("Session Master Created!" + ": " + insertedSessionMaster);
      models.sessionDetail.create(req.body, {
        fields: []
      });
      //res.redirect("/api/v1/Session");
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
