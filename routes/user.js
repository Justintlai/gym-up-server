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
router.post("/", function(req, res) {
  console.log("Post: Create New User!");
  console.log("this is req.body", req.body);
  models.User.create(req.body, {
    fields: ["firstName", "lastName", "email", "password", "DOB", "gender"]
  })
    .then(function(insertedUser) {
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
router.put("/:userid", function(req, res) {
  console.log(req.body);
  const userId = req.params.userid;
  models.User.update(req.body, {
    where: { userid: userId },
    returning: true,
    plain: true
  })
    .then(function(updatedUser) {
      console.log(updatedUser);
      models.User.findOne({ where: { userid: userId } }).then(function(
        userData
      ) {
        console.log(userData);
        res.send(userData);
      });
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

// DELETE a user
router.delete("/:userid", function(req, res) {
  models.User.destroy({
    where: {
      userid: req.params.userid
    }
  }).then(() => {
    res.send("User Deleted");
  });
});

module.exports = router;
