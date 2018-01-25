const models = require("../models");

module.exports = function() {
  return models.User.bulkCreate([
    {
      first_name: "Mark",
      last_name: "Robins",
      username: "MarkRobins",
      email: "MarkRobins@gmail.com",
      password: "password"
    },
    {
      first_name: "Jeff",
      last_name: "Man",
      username: "JeffMan",
      email: "JeffMan@gmail.com",
      password: "password"
    },
    {
      first_name: "Rachel",
      last_name: "Zimmer",
      username: "RachelZimmer",
      email: "RachelZimmer@gmail.com",
      password: "password"
    },
    {
      first_name: "Tony",
      last_name: "Stark",
      username: "TonyStark",
      email: "TonyStark@gmail.com",
      password: "password"
    },
    {
      first_name: "George",
      last_name: "Rooney",
      username: "GeorgeRooney",
      email: "GeorgeRooney@gmail.com",
      password: "password"
    },
    {
      first_name: "Beth",
      last_name: "Dawson",
      username: "BethDawson",
      email: "BethDawson@gmail.com",
      password: "password"
    },
    {
      first_name: "admin",
      last_name: "admin",
      username: "admin",
      email: "admin@gmail.com",
      password: "admin"
    }
  ]);
};
