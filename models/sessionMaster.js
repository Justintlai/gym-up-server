"use strict";

module.exports = function (sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var sessionMaster = sequelize.define("sessionMaster", {
    id: {
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
      type: DataTypes.STRING
    }
  });

  //Class Method
  sessionMaster.associate = function (models) {
    sessionMaster.hasMany(models.sessionDetail, {
      foreignKey: "sessionMasterId",
      onDelete: "cascade"
    }),
      sessionMaster.belongsTo(models.User, {
        foreignKey: "userId",
        constraints: false
      });
  };
  return sessionMaster;
};
