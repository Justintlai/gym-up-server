var models = require("../models");
var express = require("express");
var router = express.Router();

//default route to get Session
// /api/v1/session
router.get("/", function(req, res) {
  console.log("Request: Get All SESSIONS!");
  models.sessionMaster.findAll().then(function(sessions) {
    res.send(sessions);
  });
});

router.get("/create", function(req, res) {
  console.log("Request: Serve up the Create New Session Page");
  res.send(
    "<html><body><p>This is where you'd create a new session</p></body></html>"
  );
});

//a post the insert a new session
router.post("/create", function(req, res) {
  console.log("Post: Create New session!");
  console.log("this is req.body", req.body);
  models.sessionMaster
    .create(req.body, {
      //white list the fields that you want the user to be able to enter
      //(this prevents malicious users from entering data that shouldn't be modified)
      fields: ["intensity", "start", "finish", "comments"]
    })
    .then(function(insertedUser) {
      console.log("Session Created!" + ": " + insertedUser);
      //res.redirect("/api/v1/Session");
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
