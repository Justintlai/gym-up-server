var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  console.log("Request: Get HomePage!");
  res.send("<html><body><p>Home Page</p></body></html>");
});

module.exports = router;
