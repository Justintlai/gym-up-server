// config/passport.js

// load all the things we need
var LocalStrategy = require("passport-local").Strategy;
// var FacebookStrategy = require("passport-facebook").Strategy;
// var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// load up the user model
var models = require("../models");
var passport = require("passport");
// load the auth variables
// var configAuth = require("./auth");

// expose this function to our app using module.exports
module.exports = function(passport) {
                                      // =========================================================================
                                      // passport session setup ==================================================
                                      // =========================================================================
                                      // required for persistent login sessions
                                      // passport needs ability to serialize and unserialize users out of session

                                      // Passport needs to be able to serialize and deserialize users to support persistent login sessions
                                      passport.serializeUser(
                                        function(
                                          user,
                                          done
                                        ) {
                                          console.log(
                                            "serializing user:",
                                            user.email
                                          );
                                          return done(
                                            null,
                                            user
                                          );
                                        }
                                      );

                                      // used to deserialize the user
                                      passport.deserializeUser(
                                        function(
                                          id,
                                          done
                                        ) {
                                          models.User.findById(
                                            id,
                                            function(
                                              err,
                                              user
                                            ) {
                                              done(
                                                err,
                                                user
                                              );
                                            }
                                          );
                                        }
                                      );

                                      // // // =========================================================================
                                      // // // FACEBOOK ================================================================
                                      // // // =========================================================================
                                      // passport.use(
                                      //   new FacebookStrategy(
                                      //     {
                                      //       // pull in our app id and secret from our auth.js file
                                      //       clientID: configAuth.facebookAuth.clientID,
                                      //       clientSecret: configAuth.facebookAuth.clientSecret,
                                      //       callbackURL: configAuth.facebookAuth.callbackURL,
                                      //       profileFields: configAuth.facebookAuth.profileFields
                                      //     },

                                      //     // facebook will send back the token and profile
                                      //     function(token, refreshToken, profile, done) {
                                      //       // asynchronous
                                      //       process.nextTick(function() {
                                      //         // find the user in the database based on their facebook id
                                      //         models.User.findOne({ where: { fbId: profile.id } }).then(function(
                                      //           user
                                      //         ) {
                                      //           // if the user is found, then log them in
                                      //           if (user) {
                                      //             return done(null, user); // user found, return that user
                                      //           } else {
                                      //             // if there is no user found with that facebook id, create them
                                      //             var data = {
                                      //               // set all of the facebook information in our user model
                                      //               fbId: profile.id, // set the users facebook id
                                      //               fbToken: token, // we will save the token that facebook provides to the user
                                      //               fbName: profile.name.givenName + " " + profile.name.familyName, // look at the passport user profile to see how names are returned
                                      //               fbEmail: profile.emails[0].value // facebook can return multiple emails so we'll take the first
                                      //             };
                                      //             //save user
                                      //             models.User.create(data, {
                                      //               fields: ["fbId", "fbToken", "fbName", "fbEmail"]
                                      //             }).then(function(insertedUser) {
                                      //               console.log(
                                      //                 "User Created!" + ": " + insertedUser.get({ plain: true })
                                      //               );
                                      //               // console.log("about to run DONE to go back to ROUTE");
                                      //               // return done(null, insertedUser.get({ plain: true }));
                                      //               if (!insertedUser) {
                                      //                 console.log("failed to insert user - nothing found!");
                                      //                 return done(null, false);
                                      //               }
                                      //               if (insertedUser) {
                                      //                 console.log("about to run DONE to go back to ROUTE");
                                      //                 return done(null, insertedUser);
                                      //               }
                                      //             });
                                      //           }
                                      //         });
                                      //       });
                                      //     }
                                      //   )
                                      // );
                                      // // =========================================================================
                                      // // GOOGLE ==================================================================
                                      // // =========================================================================
                                      // passport.use(
                                      //   new GoogleStrategy(
                                      //     {
                                      //       clientID: configAuth.googleAuth.clientID,
                                      //       clientSecret: configAuth.googleAuth.clientSecret,
                                      //       callbackURL: configAuth.googleAuth.callbackURL
                                      //     },
                                      //     function(token, refreshToken, profile, done) {
                                      //       console.log("getting data from Google");
                                      //       // make the code asynchronous
                                      //       // User.findOne won't fire until we have all our data back from Google
                                      //       process.nextTick(function() {
                                      //         // try to find the user based on their google id
                                      //         console.log("profile ID :", profile.id);
                                      //         models.User.findOne({ where: { ggId: profile.id } }).then(function(
                                      //           user
                                      //         ) {
                                      //           // if (err) return done(err);
                                      //           if (user) {
                                      //             // if a user is found, log them in
                                      //             return done(null, user);
                                      //           } else {
                                      //             // if the user isnt in our database, create a new user
                                      //             var data = {
                                      //               // set all of the relevant information
                                      //               ggId: profile.id,
                                      //               ggToken: token,
                                      //               ggName: profile.displayName,
                                      //               ggEmail: profile.emails[0].value // pull the first email
                                      //             };
                                      //             //save user
                                      //             models.User.create(data, {
                                      //               fields: ["ggId", "ggToken", "ggName", "ggEmail"]
                                      //             }).then(function(insertedUser) {
                                      //               console.log(
                                      //                 "User Created!" + ": " + insertedUser.get({ plain: true })
                                      //               );
                                      //               // console.log("about to run DONE to go back to ROUTE");
                                      //               // return done(null, insertedUser.get({ plain: true }));
                                      //               if (!insertedUser) {
                                      //                 console.log("failed to insert user - nothing found!");
                                      //                 return done(null, false);
                                      //               }
                                      //               if (insertedUser) {
                                      //                 console.log("about to run DONE to go back to ROUTE");
                                      //                 return done(null, insertedUser);
                                      //               }
                                      //             });
                                      //           }
                                      //         });
                                      //       });
                                      //     }
                                      //   )
                                      // );
                                    };
