var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var models = require("../models");

var VerifyToken = require("./VerifyToken");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/**
 * Configure JWT
 */
var jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens
var bcrypt = require("bcryptjs");
var config = require("../config"); // get config file

router.post("/login", function(req, res) {
  models.User.findOne({
    where: { email: req.body.email }
  })
    .then(function(user) {
      // if (err) return res.status(500).send("Error on the server.");
      // if (!user) return res.status(404).send("No user found.");
      // check if the password is valid
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid)
        return res.status(401).send({ auth: false, token: null });

      // if user is found and password is valid
      // create a token
      var token = jwt.sign({ userId: user.userId }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      // return the information including token as JSON
      res.status(200).send({ auth: true, token: token });
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

router.get("/logout", function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

router.post("/register", function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    DOB: req.body.DOB,
    gender: req.body.gender
  })
    .then(function(user) {
      console.log("success");
      console.log("User Created!" + ": " + user.get({ plain: true }));
      // if user is registered without errors
      // create a token
      var token = jwt.sign({ userId: user.userId }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      console.log("token created", token);
      res.status(200).send({ auth: true, token: token });
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

router.get("/me", VerifyToken, function(req, res, next) {
  models.User.findById(req.userId, { password: 0 })
    .then(function(user) {
      res.status(200).send(user);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
