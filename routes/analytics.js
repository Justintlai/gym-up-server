var models = require("../models");
var express = require("express");
var router = express.Router();

//default route to get Session
// /api/v1/analytics
router.post("/sessions", function(req, res) {
  console.log("Request: Chart user sessions!");
  models.sessionMaster
    .findAll(
      {
        attributes: [["start", "x"], ["intensity", "y"]],
        include: [
          { model: models.sessionDetail, attributes: [] },
          { model: models.User, attributes: [] }
        ],
        where: { userId: req.body.userId }
      },
      { raw: true }
    )
    .then(function(sessions) {
      res.send(sessions);
    });
});

module.exports = router;
