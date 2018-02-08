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
exports.getAllSessions = function (userId, callback) {
  models.sessionMaster
    .findAll({
      attributes: [
        "id",
        "sessionName",
        "start",
        "finish",
        "comments",
        "intensity"
      ],
      include: [{
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
        "$sessionMaster.userId$": userId
      }
    }, {
      raw: true
    })
    .then(function (sessions) {
      callback(sessions);
    });
};
/**
 *
 * get a session associated with a user
 * */
exports.getSession = function (userId, sessionId, callback) {
  models.sessionMaster
    .findAll({
      include: [{
        model: models.sessionDetail,
        attributes: ["sessionMasterId", "workoutId", "reps", "weight"],
        required: true,
        include: [{
          model: models.Workout,
          attributes: ["name"],
          required: true
        }]
      },
      {
        model: models.User,
        attributes: ["firstName", "lastName", "email", "status"],
        required: true
      }
      ],
      where: {
        $and: [{
          "$sessionMaster.Id$": sessionId
        },
        {
          "$sessionMaster.userId$": userId
        }
        ]
      }
    }, {
      raw: true
    })
    .then(session => {
      callback(session);
    });
};
/**
 *
 * update a session for a user
 * */
exports.createSession = function (userId, newData, callback) {
  var sessionMaster = {
    userId: userId
  };
  if (newData.sessionName) sessionMaster.sessionName = newData.sessionName;
  if (newData.intensity) sessionMaster.intensity = newData.intensity;
  if (newData.start) sessionMaster.start = newData.start;
  if (newData.finish) sessionMaster.finish = newData.finish;
  if (newData.comments) sessionMaster.comments = newData.comments;

  console.log("sessionMaster: ", sessionMaster);
  models.sessionMaster.create(sessionMaster).then(function (session) {
    callback(session);
  });
};

exports.createSessionDetail = function (userId, sessionId, newData, callback) {
  models.sessionMaster
    .find({
      where: {
        "$sessionMaster.Id$": sessionId
      }
    })
    .then(function (session) {
      if (session) {
        var sessionDetail = {
          sessionMasterId: sessionId
        };
        console.log("NEW DATA WORKOUT ORDER, ", newData.workoutOrder);

        if (newData.workoutOrder)
          sessionDetail.workoutOrder = newData.workoutOrder;
        if (newData.reps) sessionDetail.reps = newData.reps;
        if (newData.workoutId) sessionDetail.workoutId = newData.workoutId;
        if (newData.weight) sessionDetail.weight = newData.weight;
        console.log("sessionDetail: ", sessionDetail);
        models.sessionDetail.create(sessionDetail).then(function (sessionCreated) {
          console.log("Session DetailID Created:", sessionCreated.id);

          //find session
          models.sessionDetail.find({
            attributes: ["id", "sessionMasterId", "workoutId", "workoutOrder", "reps", "weight"],
            include: [{
              model: models.Workout,
              attributes: ["name"],
              required: true
            }],
            where: {
              "$sessionDetail.Id$": sessionCreated.id
            }
          }, {
              plain: true
            })
            .then(function (sessionRetrieved) {
              callback(sessionRetrieved);
            });
        });
      } else {
        callback(null, "Session not found");
      }
    });
};

exports.updateSession = function (userId, sessionId, newData, callback) {
  //does that session exists
  models.sessionMaster
    .find({
      where: {
        id: sessionId
      }
    })
    .then(function (session) {
      if (session) {
        if (session.id != sessionId) {
          return callback(null, "You don't own that session");
        }
        if (newData.sessionName) session.sessionName = newData.sessionName;
        if (newData.intensity) session.intensity = newData.intensity;
        if (newData.start) session.start = newData.start;
        if (newData.finish) session.finish = newData.finish;
        if (newData.comments) session.comments = newData.comments;

        session.save().then(saved => {
          callback(saved);
        });
      } else {
        callback(null, "Session Not Found");
      }
    });
};


exports.updateSessionDetail = function (userId, sessionDetailId, newData, callback) {
  //does that session exists
  models.sessionDetail
    .find({
      where: {
        id: sessionDetailId
      }
    })
    .then(function (session) {
      if (session) {
        if (session.id != sessionDetailId) {
          return callback(null, "You don't own that session");
        }
        if (newData.workoutId) session.workoutId = newData.workoutId;
        if (newData.workoutOrder) session.workoutOrder = newData.workoutOrder;
        if (newData.reps) session.reps = newData.reps;
        if (newData.weight) session.weight = newData.weight;

        session.save().then(saved => {
          callback(saved);
        });
      } else {
        callback(null, "Session DetailID Not Found");
      }
    });
};

/**
 * deletes a Session and Detail 
 * */
exports.deleteSession = function (userId, sessionId, callback) {
  models.sessionMaster.find({
    where: {
      id: sessionId
    }
  }).then(function (session) {
    if (session) {
      //check if the user is the owner of the car otherwise they can't delete it
      if (session.id != sessionId) {
        return callback(null, "You don't own that session");
      }
      session.destroy().then(callback);
    } else {
      callback(null, "Session not found");
    }
  });
};

/**
 * deletes a Session and Detail 
 * */
exports.deleteSessionDetail = function (userId, sessionDetailId, callback) {
  models.sessionDetail.find({
    where: {
      id: sessionDetailId
    }
  }).then(function (sessionDetail) {
    if (sessionDetail) {
      //check if the user is the owner of the car otherwise they can't delete it
      if (sessionDetail.id != sessionDetailId) {
        return callback(null, "You don't own that session");
      }
      sessionDetail.destroy().then(callback);
    } else {
      callback(null, "Session Detail not found");
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
exports.getAllWorkouts = function (callback) {
  models.Workout.findAll({
    raw: true
  }).then(function (workouts) {
    callback(workouts);
  });
};
/**
 *
 * get a workout associated with a user
 * */
exports.createWorkout = function (userId, newData, callback) {
  var Workout = {
    userId: userId
  };
  if (newData.sessionName) Workout.sessionName = newData.sessionName;
  if (newData.Intensity) Workout.Intensity = newData.Intensity;
  if (newData.start) Workout.start = newData.start;
  if (newData.finish) Workout.finish = newData.finish;
  if (newData.comments) Workout.comments = newData.comments;

  console.log("sessionMaster: ", Workout);
  models.sessionMaster.create(Workout).then(function (workout) {
    callback(workout);
  });
};


/**
 * ==============================================
 * //////////////////////////////////////////////
 *                   USERS
 * //////////////////////////////////////////////
 * ==============================================
 */
/**
 *
 * get a session associated with a user
 * */
exports.getUser = function (userId, sessionId, callback) {
  models.sessionMaster
    .find({
      include: [{
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
        $and: [{
          "$sessionMaster.Id$": sessionId
        },
        {
          "$sessionMaster.userId$": userId
        }
        ]
      }
    }, {
      raw: true
    })
    .then(session => {
      callback(session);
    });
};


