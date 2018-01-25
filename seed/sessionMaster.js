const models = require("../models");

module.exports = function() {
  return models.sessionMaster
    .bulkCreate([
      {
        sessionMasterId: 1,
        userId: 7,
        sessionName: "Lateral Raises",
        intensity: 0,
        start: "2018-01-02T00:00:00",
        finish: "2017-12-14T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 2,
        userId: 6,
        sessionName: "Dumbbell Lunges Walking",
        intensity: 4,
        start: "2018-01-15T00:00:00",
        finish: "2017-11-18T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 3,
        userId: 4,
        sessionName: "Triceps Machine",
        intensity: 1,
        start: "2018-01-13T00:00:00",
        finish: "2017-12-30T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 4,
        userId: 4,
        sessionName: "Sit-ups",
        intensity: 2,
        start: "2017-12-08T00:00:00",
        finish: "2017-11-08T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 5,
        userId: 7,
        sessionName: "Standing Calf Raises",
        intensity: 3,
        start: "2017-12-09T00:00:00",
        finish: "2018-01-06T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 6,
        userId: 5,
        sessionName: "Dumbbells on Scott Machine",
        intensity: 8,
        start: "2018-01-03T00:00:00",
        finish: "2017-12-02T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 7,
        userId: 1,
        sessionName: "Leg Curls (sitting)",
        intensity: 0,
        start: "2017-11-24T00:00:00",
        finish: "2017-11-25T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 8,
        userId: 6,
        sessionName: "Rowing, Lying on Bench",
        intensity: 7,
        start: "2017-12-29T00:00:00",
        finish: "2017-12-03T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 9,
        userId: 4,
        sessionName: "Long-Pulley (low Row)",
        intensity: 3,
        start: "2017-12-02T00:00:00",
        finish: "2017-12-04T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 10,
        userId: 1,
        sessionName: "Shoulder Press, Dumbbells",
        intensity: 3,
        start: "2017-11-29T00:00:00",
        finish: "2018-01-18T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 11,
        userId: 7,
        sessionName: "Shoulder Press, Dumbbells",
        intensity: 8,
        start: "2018-01-06T00:00:00",
        finish: "2017-11-08T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 12,
        userId: 3,
        sessionName: "Rowing, T-bar",
        intensity: 7,
        start: "2017-11-19T00:00:00",
        finish: "2017-11-06T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 13,
        userId: 4,
        sessionName: "Long-Pulley, Narrow",
        intensity: 5,
        start: "2017-12-29T00:00:00",
        finish: "2017-12-03T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 14,
        userId: 6,
        sessionName: "MGM Machine",
        intensity: 4,
        start: "2018-01-09T00:00:00",
        finish: "2017-11-14T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 15,
        userId: 2,
        sessionName: "Triceps Machine",
        intensity: 3,
        start: "2017-12-09T00:00:00",
        finish: "2017-11-08T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 16,
        userId: 7,
        sessionName: "Dumbbell Lunges Standing",
        intensity: 6,
        start: "2018-01-10T00:00:00",
        finish: "2017-12-17T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 17,
        userId: 3,
        sessionName: "Dumbbell Lunges Walking",
        intensity: 2,
        start: "2017-11-09T00:00:00",
        finish: "2017-11-23T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 18,
        userId: 3,
        sessionName: "Long-Pulley, Narrow",
        intensity: 7,
        start: "2017-12-23T00:00:00",
        finish: "2018-01-18T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 19,
        userId: 1,
        sessionName: "Good Mornings",
        intensity: 6,
        start: "2018-01-09T00:00:00",
        finish: "2018-01-02T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 20,
        userId: 5,
        sessionName: "Triceps Machine",
        intensity: 0,
        start: "2017-12-22T00:00:00",
        finish: "2018-01-19T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 21,
        userId: 2,
        sessionName: "Leg Raises, Lying",
        intensity: 1,
        start: "2017-12-18T00:00:00",
        finish: "2017-12-13T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 22,
        userId: 7,
        sessionName: "Fly With Dumbbells",
        intensity: 9,
        start: "2018-01-06T00:00:00",
        finish: "2017-11-07T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 23,
        userId: 3,
        sessionName: "Leg Presses (wide)",
        intensity: 4,
        start: "2017-12-08T00:00:00",
        finish: "2017-11-08T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 24,
        userId: 7,
        sessionName: "Good Mornings",
        intensity: 5,
        start: "2017-11-07T00:00:00",
        finish: "2017-12-07T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 25,
        userId: 4,
        sessionName: "Shrugs, Barbells",
        intensity: 4,
        start: "2017-12-28T00:00:00",
        finish: "2017-11-23T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 26,
        userId: 3,
        sessionName: "Leg Presses (wide)",
        intensity: 0,
        start: "2017-11-02T00:00:00",
        finish: "2017-12-10T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 27,
        userId: 7,
        sessionName: "Shoulder Press, Dumbbells",
        intensity: 7,
        start: "2017-11-01T00:00:00",
        finish: "2017-12-21T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 28,
        userId: 3,
        sessionName: "Hyperextensions",
        intensity: 2,
        start: "2017-12-10T00:00:00",
        finish: "2017-11-13T00:00:00",
        comments: "random comments"
      },
      {
        sessionMasterId: 29,
        userId: 5,
        sessionName: "Long-Pulley, Narrow",
        intensity: 4,
        start: "2017-12-04T00:00:00",
        finish: "2017-12-16T00:00:00",
        comments: "random comments"
      }
    ])
    .then(function() {
      console.log("==================");
      console.log("Session Master DATA ADDED");
      console.log("==================");
    });
};
