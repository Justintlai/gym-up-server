"use strict";

module.exports = function(sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var sessionDetail = sequelize.define("sessionDetail", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, //allow ID key to auto-generate
      primaryKey: true
    },
    sessionMasterId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    workoutId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    workoutOrder: {
      type: DataTypes.INTEGER
    },
    reps: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    }
  });
  //Class Method
  sessionDetail.associate = function(models) {
    sessionDetail.belongsTo(models.sessionMaster, {
      foreignKey: "sessionMasterId",
      constraints: false
    });
  };
  return sessionDetail;
};
