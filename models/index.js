"use strict";

var fs = require("fs"); //node file system
var path = require("path"); // node path system
var Sequelize = require("sequelize"); //npm package
var env = process.env.Node_ENV || "development"; //set the enironment to run the app in
var config = require(path.join(__dirname, "..", "config", "config.json"))[env];
// config.development
// combine the paths of the environment
var db = {}; //initialise db

console.log("Models/index.js");
console.log("config.use_env_variable", config.use_env_variable);
console.log("process.env.Node_ENV", process.env.Node_ENV);
//test to find which config setup to use
if (config.use_env_variable) {
  // config.use_env_variable doesn't exist
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    //"mysql://bc0d1b10bd9b85:812001b8@eu-cdbr-west-01.cleardb.com/heroku_fd69a5d647a10a2?reconnect=true"
    config.database,
    config.username,
    config.password,
    config
  );
}

console.log("Config:", config);

fs //Node file System
  .readdirSync(__dirname) //go into the route directory
  .filter(function(file) {
    return file.indexOf(".") !== 0 && file !== "index.js"; //find all .js files (assuming they are model files)
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file)); //for each .js file we create a model for each file
    db[model.name] = model;
  });

//check the relationships between the tables with the associations stated
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize; //the Sequelise npm package

module.exports = db;
