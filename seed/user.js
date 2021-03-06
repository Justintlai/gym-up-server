const models = require("../models");

module.exports = function() {
  return models.User.bulkCreate(
    [
      {
        firstName: "Mark",
        lastName: "Robins",
        username: "MarkRobins",
        email: "MarkRobins@gmail.com",
        password: "password"
      },
      {
        firstName: "Jeff",
        lastName: "Man",
        username: "JeffMan",
        email: "JeffMan@gmail.com",
        password: "password"
      },
      {
        firstName: "Rachel",
        lastName: "Zimmer",
        username: "RachelZimmer",
        email: "RachelZimmer@gmail.com",
        password: "password"
      },
      {
        firstName: "Tony",
        lastName: "Stark",
        username: "TonyStark",
        email: "TonyStark@gmail.com",
        password: "password"
      },
      {
        firstName: "George",
        lastName: "Rooney",
        username: "GeorgeRooney",
        email: "GeorgeRooney@gmail.com",
        password: "password"
      },
      {
        firstName: "Beth",
        lastName: "Dawson",
        username: "BethDawson",
        email: "BethDawson@gmail.com",
        password: "password"
      },
      {
        firstName: "admin",
        lastName: "admin",
        username: "admin",
        email: "admin@gmail.com",
        password: "admin"
      }
    ],
    { individualHooks: true }
  ).then(function() {
    console.log("==================");
    console.log("USER DATA ADDED");
    console.log("==================");
  });
};
