"use strict";

module.exports = function(sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var sessionMaster = sequelize.define("sessionMaster", {
    sessionMasterId: {
      type: DataTypes.INTEGER,
      autoIncrement: true, //allow ID key to auto-generate
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    sessionName: {
      type: DataTypes.STRING
    },
    intensity: {
      type: DataTypes.INTEGER
    },
    start: {
      type: DataTypes.DATE
    },
    finish: {
      type: DataTypes.DATE
    },
    comments: {
      type: DataTypes.CHAR(1)
    }
  });

  //Class Method
  sessionMaster.associate = function(models) {
    sessionMaster.hasMany(models.sessionDetail, {
      foreignKey: "sessionDetailId"
    });
  };
  return sessionMaster;
};
