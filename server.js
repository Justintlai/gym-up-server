// Basic Setup
/**
 * Module dependencies.
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const http = require("http");
const cors = require("cors");
const fs = require("fs");
const passport = require("passport");
const logger = require("morgan");
// const redis = require('redis');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const session = require("express-session");
const { loadFile } = require("sequelize-fixtures");
const Seed = require("./seed/index");

const models = require("./models");

require("./config/passport")(passport); // pass passport for configuration

// if (process.env.REDISTOGO_URL) {
//   // TODO: redistogo connection
//   // inside if statement
//   var rtg = require("url").parse(process.env.REDISTOGO_URL);
//   var rds = require("redis").createClient(rtg.port, rtg.hostname);
//   rds.auth(rtg.auth.split(":")[1]);

// } else {
//   var rds = redis.createClient({ port: 6379, host: "localhost", db: 1 });
// }

const routes = require("./routes/index");
const auth = require("./routes/auth")(passport);
const users = require("./routes/user");
const workouts = require("./routes/workout"); //inlcude this so we can quote below
const sessions = require("./routes/session"); //inlcude this so we can quote below
const analytics = require("./routes/analytics");
const oauth = require("./routes/oauth"); //inlcude this so we can quote below

app.use(cookieParser("random-key")); // read cookies (needed for auth)
app.use(cookieSession({ secret: "random-key" }));
var sessionMiddleware = session({
  // store: rds, // XXX redis server config
  secret: "random-key",
  resave: false,
  saveUninitialized: false
});

// view engine setup
app.set("view engine", "ejs");

// required for passport
// app.use(
//   session({ secret: "AJLPHsecret", resave: true, saveUninitialized: true })
// ); // session secret
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

function isLoggedIn(req, res, next) {
  //console.log(req)
  if (req.isAuthenticated()) {
    return next();
  }
  return res
    .status(401)
    .send({ status: 401, message: "You must be logged in." });
}

app.use(logger("dev")); // log every request to the console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept"
  );
  res.header("Cache-Control", "no-store, no-cache");

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

//Specify which routes to use
app.use("/", routes);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/workouts", workouts);
app.use("/api/v1/sessions", isLoggedIn, sessions);
app.use("/api/v1/analytics", analytics);
app.use("/api/v1/oauth", oauth);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "8080");
console.log(port);
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
models.sequelize.query("SET FOREIGN_KEY_CHECKS = 0").then(function() {
  models.sequelize
    .sync({ force: true }) //only use in dev - remove in production as all data will be erased
    .then(function() {
      console.log("db connected");
      server.listen(port);
      server.on("error", onError);
      server.on("listening", onListening);
    })
    .then(() => {
      console.log("running seed files");
      Seed();
    })
    .then(() => {
      // DB reset
    })
    .catch(err => {
      // Error in one of the seeds, specific error in 'err'
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ status: 404, message: "Route not found!" });
  //next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  if (err == "invalid session, please login again") {
    req.logOut();
  }
  res.status(500).send({ status: 500, message: "Server Error!", err: err });
  console.log(err);
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
  console.log("ENV =", process.env.Node_ENV);
}
