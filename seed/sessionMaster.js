const models = require("../models");

module.exports = function() {
  return models.sessionMaster
    .bulkCreate([
      {
        sessionMasterId: 1,
        userId: 1,
        sessionName: "Pull Ups on Machine",
        intensity: 7,
        start: "2017-11-30T00:00:00",
        finish: "2017-12-29T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 11,
        userId: 41,
        sessionName: "Squats",
        intensity: 6,
        start: "2018-01-14T00:00:00",
        finish: "2017-12-16T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 21,
        userId: 51,
        sessionName: "Leg Curls (sitting)",
        intensity: 6,
        start: "2017-12-07T00:00:00",
        finish: "2017-12-26T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 31,
        userId: 11,
        sessionName: "Triceps Machine",
        intensity: 8,
        start: "2018-01-10T00:00:00",
        finish: "2018-01-06T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 41,
        userId: 31,
        sessionName: "Triceps Machine",
        intensity: 6,
        start: "2018-01-04T00:00:00",
        finish: "2017-11-11T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 51,
        userId: 31,
        sessionName: "Shoulder Press, Dumbbells",
        intensity: 4,
        start: "2018-01-10T00:00:00",
        finish: "2017-12-28T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 61,
        userId: 11,
        sessionName: "Shoulder Press, Barbell",
        intensity: 1,
        start: "2017-12-20T00:00:00",
        finish: "2017-11-14T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 71,
        userId: 31,
        sessionName: "Dumbbells on Scott Machine",
        intensity: 3,
        start: "2017-11-18T00:00:00",
        finish: "2017-11-05T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 81,
        userId: 41,
        sessionName: "Dumbbell Lunges Walking",
        intensity: 7,
        start: "2017-11-14T00:00:00",
        finish: "2017-12-17T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 91,
        userId: 21,
        sessionName: "Fly With Dumbbells",
        intensity: 6,
        start: "2017-12-31T00:00:00",
        finish: "2017-11-24T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 101,
        userId: 1,
        sessionName: "Rowing, Seated",
        intensity: 5,
        start: "2017-11-04T00:00:00",
        finish: "2017-12-07T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 111,
        userId: 31,
        sessionName: "Rowing, Seated",
        intensity: 0,
        start: "2017-11-20T00:00:00",
        finish: "2017-12-24T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 121,
        userId: 21,
        sessionName: "French Press (skullcrusher) SZ-bar",
        intensity: 2,
        start: "2017-12-08T00:00:00",
        finish: "2017-12-07T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 131,
        userId: 1,
        sessionName: "Rowing, T-bar",
        intensity: 5,
        start: "2018-01-17T00:00:00",
        finish: "2017-12-17T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 141,
        userId: 1,
        sessionName: "Standing Calf Raises",
        intensity: 8,
        start: "2018-01-06T00:00:00",
        finish: "2017-11-21T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 151,
        userId: 11,
        sessionName: "Shrugs, Barbells",
        intensity: 6,
        start: "2017-12-21T00:00:00",
        finish: "2017-11-03T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 161,
        userId: 41,
        sessionName: "Negative Crunches",
        intensity: 2,
        start: "2017-11-20T00:00:00",
        finish: "2018-01-09T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 171,
        userId: 51,
        sessionName: "Pull-ups",
        intensity: 4,
        start: "2017-12-30T00:00:00",
        finish: "2017-12-26T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 181,
        userId: 51,
        sessionName: "Pull-ups",
        intensity: 1,
        start: "2018-01-09T00:00:00",
        finish: "2018-01-17T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 191,
        userId: 41,
        sessionName: "Rowing, T-bar",
        intensity: 3,
        start: "2017-11-06T00:00:00",
        finish: "2017-12-07T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 201,
        userId: 31,
        sessionName: "Good Mornings",
        intensity: 5,
        start: "2017-12-13T00:00:00",
        finish: "2018-01-19T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 211,
        userId: 31,
        sessionName: "Leg Curls (sitting)",
        intensity: 4,
        start: "2018-01-16T00:00:00",
        finish: "2017-11-02T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 221,
        userId: 31,
        sessionName: "Leg Raises, Lying",
        intensity: 7,
        start: "2017-11-12T00:00:00",
        finish: "2017-12-17T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 231,
        userId: 31,
        sessionName: "Fly With Dumbbells",
        intensity: 1,
        start: "2017-11-07T00:00:00",
        finish: "2017-12-05T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 241,
        userId: 61,
        sessionName: "Rowing, Seated",
        intensity: 2,
        start: "2018-01-07T00:00:00",
        finish: "2017-12-27T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 251,
        userId: 31,
        sessionName: "Long-Pulley (low Row)",
        intensity: 2,
        start: "2017-11-07T00:00:00",
        finish: "2017-11-03T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 261,
        userId: 61,
        sessionName: "French Press (skullcrusher) Dumbbells",
        intensity: 5,
        start: "2017-11-28T00:00:00",
        finish: "2017-12-31T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 271,
        userId: 21,
        sessionName: "Leg Press on Hackenschmidt Machine",
        intensity: 0,
        start: "2018-01-10T00:00:00",
        finish: "2018-01-12T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 281,
        userId: 11,
        sessionName: "Pull-ups",
        intensity: 6,
        start: "2017-12-10T00:00:00",
        finish: "2017-11-21T00:00:00",
        comments: "random comments"
      }
    ])
    .then(function() {
      console.log("==================");
      console.log("Session Master DATA ADDED");
      console.log("==================");
    });
};
