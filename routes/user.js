var models = require("../models");
var express = require("express");
var router = express.Router();

//default route to get users
router.get("/", function(req, res) {
  console.log("Request: Get All Users!");
  models.User.findAll({ raw: true }).then(function(users) {
    res.send(users);
  });
});

//CREATE new user
router.post("/create", function(req, res) {
  console.log("Post: Create New User!");
  console.log("this is req.body", req.body);
  models.User.create(req.body, {
    fields: ["firstName", "lastName", "email", "password", "DOB", "gender"]
  })
    .success(function(insertedUser) {
      console.log("User Created!" + ": " + insertedUser.get({ plain: true }));
      res.send(insertedUser.get({ plain: true }));
      //res.redirect("/api/v1/users");
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

// UPDATE a user
router.put("/:userid/update", function(req, res) {
  console.log(req.body);
  models.User.update(req.body, { where: { userid: req.params.userid } }).then(
    updatedUser => {
      console.log(updatedUser);
      res.send(updatedUser);
    }
  );
});

// DELETE a user
router.get("/:userid/destroy", function(req, res) {
  models.User.destroy({
    where: {
      userid: req.params.userid
    }
  }).then(() => {
    res.send("User Deleted");
  });
});

module.exports = router;
