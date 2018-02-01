var models = require("../models");

/**
 * ==============================================
 * //////////////////////////////////////////////
 *                   SESSIONS
 * //////////////////////////////////////////////
 * ==============================================
 */

/**
 *
 * gets the list of sessions associated with a user
 * */
exports.getAllSessions = function(userId, callback) {
  models.sessionMaster
    .findAll(
      {
        attributes: [
          "id",
          "sessionName",
          "start",
          "finish",
          "comments",
          "intensity"
        ],
        include: [
          {
            model: models.sessionDetail,
            attributes: ["sessionMasterId", "workoutId", "reps", "weight"],
            required: true
          },
          {
            model: models.User,
            attributes: ["firstName", "lastName", "email", "status"],
            required: true
          }
        ],
        where: { "$sessionMaster.userId$": userId }
      },
      { raw: true }
    )
    .then(function(sessions) {
      callback(sessions);
    });
};
/**
 *
 * get a session associated with a user
 * */
exports.getSession = function(userId, sessionId, callback) {
  models.sessionMaster
    .findAll(
      {
        include: [
          {
            model: models.sessionDetail,
            attributes: ["sessionMasterId", "workoutId", "reps", "weight"],
            required: true
          },
          {
            model: models.User,
            attributes: ["firstName", "lastName", "email", "status"],
            required: true
          }
        ],
        where: {
          $and: [
            { "$sessionMaster.Id$": sessionId },
            { "$sessionMaster.userId$": userId }
          ]
        }
      },
      { raw: true }
    )
    .then(session => {
      callback(session);
    });
};
/**
 *
 * update a session for a user
 * */
exports.createSession = function(userId, newData, callback) {
  var sessionMaster = {
    userId: userId
  };
  if (newData.sessionName) sessionMaster.sessionName = newData.sessionName;
  if (newData.intensity) sessionMaster.intensity = newData.intensity;
  if (newData.start) sessionMaster.start = newData.start;
  if (newData.finish) sessionMaster.finish = newData.finish;
  if (newData.comments) sessionMaster.comments = newData.comments;

  console.log("sessionMaster: ", sessionMaster);
  models.sessionMaster.create(sessionMaster).then(function(session) {
    callback(session);
  });
};

exports.createSessionDetail = function(userId, sessionId, newData, callback) {
  models.sessionMaster
    .find({
      where: { id: sessionId }
    })
    .then(function(session) {
      if (session) {
        var sessionDetail = {
          sessionMasterId: sessionId
        };
        console.log("NEW DATA WORKOUT ORDER, ", newData.workoutOrder);

        if (newData.workoutOrder)
          sessionDetail.workoutOrder = newData.workoutOrder;
        if (newData.reps) sessionDetail.reps = newData.reps;
        if (newData.workoutId) sessionDetail.workoutId = newData.workoutId;
        if (newData.weight) sessionDetail.finish = newData.weight;
        console.log("sessionDetail: ", sessionDetail);
        models.sessionDetail.create(sessionDetail).then(function(session) {
          callback(session);
        });
      } else {
        callback(null, "Session not found");
      }
    });
};

exports.updateSession = function(userId, sessionId, newDate, callback) {
  models.sessionMaster
    .find({
      where: {
        id: sessionId
      }
    })
    .then(function(session) {
      if (session) {
        if (session.id != sessionId) {
          return callback(null, "You don't own that session");
        }
        var sessionMaster = { userId: userId };
        if (newData.sessionName)
          sessionMaster.sessionName = newData.sessionName;
        if (newData.intensity) sessionMaster.intensity = newData.intensity;
        if (newData.start) sessionMaster.start = newData.start;
        if (newData.finish) sessionMaster.finish = newData.finish;
        if (newData.comments) sessionMaster.comments = newData.comments;

        sessionMaster.save().then(function(saved) {
          callback(saved);
        });
      } else {
        callback(null, "Session Not Found");
      }
    });
};

/**
 * ==============================================
 * //////////////////////////////////////////////
 *                   WORKOUTS
 * //////////////////////////////////////////////
 * ==============================================
 */
/**
 * gets the list of sessions associated with the user
 * */
exports.getAllWorkouts = function(callback) {
  models.Workout.findAll({ raw: true }).then(function(workouts) {
    callback(workouts);
  });
};
/**
 *
 * get a workout associated with a user
 * */
exports.createWorkout = function(userId, newData, callback) {
  var Workout = {
    userId: userId
  };
  if (newData.sessionName) Workout.sessionName = newData.sessionName;
  if (newData.Intensity) Workout.Intensity = newData.Intensity;
  if (newData.start) Workout.start = newData.start;
  if (newData.finish) Workout.finish = newData.finish;
  if (newData.comments) Workout.comments = newData.comments;

  console.log("sessionMaster: ", Workout);
  models.sessionMaster.create(Workout).then(function(workout) {
    callback(workout);
  });
};
/**
 * ==============================================
 * //////////////////////////////////////////////
 *                   SAMPLES
 * //////////////////////////////////////////////
 * ==============================================
 */

/**
 * creates a new car and puts it in the database
 * */
exports.createCar = function(userId, newData, callback) {
  var car = {
    ownerId: userId
  };
  if (newData.make) car.make = newData.make;
  if (newData.model) car.model = newData.model;
  if (newData.color) car.color = newData.color;
  if (newData.licensePlate) car.licensePlate = newData.licensePlate;

  models.Car.create(car).then(function(car) {
    callback(car);
  });
};

/**
 * gets a car by id
 * */
exports.getCar = function(carId, callback) {
  models.Car.find({
    where: {
      id: carId
    }
  }).then(function(car) {
    callback(car);
  });
};

/**
 * updates the car info by id
 * */
exports.updateCarInfo = function(userId, newData, callback) {
  models.Car.find({
    where: {
      id: newData.id
    }
  }).then(function(car) {
    if (car) {
      if (car.ownerId != userId) {
        return callback(null, "You don't own that car");
      }
      if (newData.make) car.make = newData.make;
      if (newData.model) car.model = newData.model;
      if (newData.color) car.color = newData.color;
      if (newData.licensePlate) car.licensePlate = newData.licensePlate;
      car.save().then(saved => {
        callback(saved);
      });
    } else {
      callback(null, "Car not found");
    }
  });
};

/**
 * deletes a car object
 * */
exports.deleteCar = function(userId, carId, callback) {
  models.Car.find({
    where: {
      id: carId
    }
  }).then(function(car) {
    if (car) {
      //check if the user is the owner of the car otherwise they can't delete it
      if (car.ownerId != userId) {
        return callback(null, "You don't own that car");
      }
      car.destroy().then(callback);
    } else {
      callback(null, "Car not found");
    }
  });
};

/**
 * gets the list of all users
 * */
exports.getAllUsers = function(callback) {
  models.User.findAll().then(function(users) {
    if (users) {
      callback(users);
    } else {
      callback(null);
    }
  });
};
