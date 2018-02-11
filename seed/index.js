const UserSeed = require("./user");
const WorkoutSeed = require("./workout");
const SessionMasterSeed = require("./sessionMaster");
const SessionDetailSeed = require("./sessionDetail");

module.exports = function() {
  return Promise.all([
    // Returning and thus passing a Promise here
    // Independent seeds first
    UserSeed(),
    WorkoutSeed()
  ]).then(() => {
    return Promise.all([SessionMasterSeed()]).then(() => {
      return Promise.all([SessionDetailSeed()]).then(() => {
        console.log("********** Successfully seeded db **********");
      });
    });
  });
};
