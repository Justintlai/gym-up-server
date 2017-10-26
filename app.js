// Basic Setup
/**
 * Module dependencies.
 */
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var ejs = require("ejs");
var http = require("http");
var models = require("./models");

var routes = require("./routes/index");
var users = require("./routes/users");
var workouts = require("./routes/workouts"); //inlcude this so we can quote below

var app = express();

// view engine setup
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Specify which routes to use
app.use("/", routes);
app.use("/api/v1/users", users);
app.use("/api/v1/workouts", workouts);

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || "5000");
console.log(port);
app.set("port", port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
models.sequelize
  .sync({
    force: true //only use in dev - remove in production as all data will be erased
  })
  .then(function() {
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
  });

//catch 404 and forward error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//error handler
// no stacktraces leadked to user unless in dev env
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: app.get("env") === "development" ? err : {}
  });
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
