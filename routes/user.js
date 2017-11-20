var models = require("../models");
var express = require("express");
var router = express.Router();

//default route to get users
router.get("/", function(req, res) {
  console.log("Request: Get All Users!");
  models.User.findAll().then(function(users) {
    res.send(users);
  });
});

// delete a user
router.get("/:userid/destroy", function(req, res) {
  models.User.destroy({
    where: {
      userid: req.params.userId
    }
  }).then(function() {
    res.redirect("/");
  });
});

// user/create
router.get("/create", function(req, res) {
  console.log("Request: Serve up the Create New User Page");
  res.send(
    "<html><body><p>This is where you'd create a new user</p></body></html>"
  );
});

//Create new user
router.post("/create", function(req, res) {
  console.log("Post: Create New User!");
  console.log("this is req.body", req.body);
  models.User.create(req.body, {
    //white list the fields that you want the user to be able to enter
    //(this prevents malicious users from entering data that shouldn't be modified)
    fields: ["userFName", "userLName", "email", "password", "DOB", "gender"]
  })
    .then(function(insertedUser) {
      console.log("User Created!" + ": " + insertedUser);
      res.send(insertedUser);
      //res.redirect("/api/v1/users");
    })
    .catch(function(error) {
      console.log(error);
    });
});

// Update a user
router.put("/:userid/update", function(req, res) {
  models.User.update(req.body, { where: { userId: req.params.userId } }).then(
    updatedUser => {
      console.log(updatedUser);
    }
  );
});

module.exports = router;