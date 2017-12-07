var models = require("../models");
var express = require("express");
var router = express.Router();
var passport = require("passport");
//default route to get users
// router.get("/", function(req, res) {
//   console.log("Request: Get All Users!");
//   models.User.findAll({ raw: true }).then(function(users) {
//     res.send(users);
//   });
// });
// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["public_profile", "email"]
  })
);

// handle the callback after facebook has authenticated the user
router.get("/facebook/callback", function(req, res) {
  console.log("CALLBACK STARTED");
  passport.authenticate("google"), function(req,res) {
    res.render("index");
    console.log("After Passport AUTH");
  });
// =====================================
// GOOGLE ROUTES =======================
// =====================================
// send to google to do the authentication
// profile gets us their basic information including their name
// email gets their emails
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// the callback after google has authenticated the user
router.get("/google/callback", passport.authenticate("google"), function(
  req,
  res
) {
  res.render("index");
  console.log("After Passport AUTH");
});

module.exports = router;
