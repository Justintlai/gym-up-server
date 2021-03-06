var models = require("../models");
var AM = require("../modules/account-manager");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function(passport) {
  // Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser(function(user, done) {
    console.log("serializing user:", user.email);
    return done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    console.log("deserializing user " + user.email);
    try {
      models.User.find({
        where: { id: user.id },
        attributes: ["id", "firstName", "lastName", "email"]
      })
        .then(function(user) {
          if (!user) {
            return done("invalid session, please login again", null);
          }
          return done(null, user);
        })
        .error(err => {
          return done("User does not exist", null);
        });
    } catch (err) {
      return done("Couldn't deserialize user... invalid session" + err, null);
    }
  });

  passport.use(
    "login",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" }, //check if information provided
      function(req, email, password, done) {
        if (!email || !password) {
          return done(null, false, "Missing Fields");
        }
        //verify the information passed by client
        AM.manualLogin(email, password, (err, user) => {
          if (err) {
            return done(null, false, "Invalid username or password.");
          } else {
            return done(null, user, "Signed in succesfully!");
          }
        });
      }
    )
  );

  passport.use(
    "signup",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email" // define the parameter in req.body that passport can use as username and password
      },
      function(req, email, password, done) {
        // Check if all the required fields are gotten
        email = req.body.email;
        password = req.body.password;
        var reqEmail = req.body.email;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;

        if (!password || !reqEmail) {
          return done(null, false, "Missing Fields");
        }

        AM.addNewAccount(
          {
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: reqEmail
          },
          (err, user) => {
            if (err) {
              return done(null, false, err);
            } else {
              return done(null, user, "Signup successful");
            }
          }
        );
      }
    )
  );
};
