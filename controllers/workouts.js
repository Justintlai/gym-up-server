const db = require('../server'); //reference of server.js

import * as workouts from './file';

exports.getAllWorkouts = () => {
  db.query('blah';
}


var workout = {
  getAllWorkouts: function(callback) {
    return db.query('SELECT * FROM workouts', callback);
  },
  getWorkoutById: function(workoutid, callback) {
    return db.query(
      'SELECT * FROM workouts WHERE workoutID=?',
      [wokroutid],
      callback
    );
  },
  addWorkout: function(workout, callback) {
    return db.query(
      'INSERT INTO workouts values(?,?,?)',
      [workout.wokroutId, workout.name, workout.bodyPart],
      callback
    );
  },
  deleteWorkout: function(wokroutid, callback) {
    return db.query(
      'DELETE FROM workouts WHERE workoutID=?',
      [workoutid],
      callback
    );
  },
  updateWorkout: function(wokroutid, workout, callback) {
    return db.query(
      'update task set name=?,Status=? WHERE Id=?',
      [workout.name, workout.bodyPart, workoutID],
      callback
    );
  }
};
module.exports = Workout;
