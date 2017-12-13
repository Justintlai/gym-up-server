"use strict";

module.exports = function(sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var Workout = sequelize.define("Workout", {
    //Enter the fields
    workoutId: {
      type: DataTypes.INTEGER,
      autoIncrement: true, //allow ID key to auto-generate
      primaryKey: true
    },
    name: DataTypes.STRING,
    bodyPart: DataTypes.STRING,
    videoURL: DataTypes.STRING
  });
  //Class Method
  Workout.associate = function(models) {
    Workout.hasMany(models.sessionDetail, { foreignKey: "sessionDetailId" });
  };
  return Workout;
};
