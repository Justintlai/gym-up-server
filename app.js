// Basic Setup
/**
 * Module dependencies.
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const http = require("http");
const { loadFile } = require("sequelize-fixtures");

const models = require("./models");

const routes = require("./routes/index");
const users = require("./routes/user");
const workouts = require("./routes/workout"); //inlcude this so we can quote below
const sessions = require("./routes/session"); //inlcude this so we can quote below
const auth = require("./auth/AuthController");

const app = express();

// view engine setup
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Specify which routes to use
app.use("/", routes);
app.use("/api/v1/user", users);
app.use("/api/v1/workout", workouts);
app.use("/api/v1/session", sessions);
app.use("/api/v1/auth", auth);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "5000");
console.log(port);
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
models.sequelize
  .sync({
    force: true //only use in dev - remove in production as all data will be erased
  })
  .then(function() {
    console.log("db connected");
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
  })
  .then(() => {
    console.log("load files");
    loadFile("./seed/user.json", models);
    loadFile("./seed/workout.json", models);
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
