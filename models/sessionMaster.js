"use strict";

module.exports = function(sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var sessionMaster = sequelize.define(
    "sessionMaster",
    {
      sessionMasterId: {
        type: DataTypes.INTEGER,
        autoIncrement: true, //allow ID key to auto-generate
        primaryKey: true
      },
      sessionName: {
        type: DataTypes.STRING
      },
      intensity: {
        type: DataTypes.INTEGER
      },
      start: {
        type: DataTypes.DATETIME
      },
      finish: {
        type: DataTypes.DATETIME
      },
      comments: {
        type: DataTypes.CHAR(1)
      }
    },
    {
      classMethods: {
        associate: function(models) {
          sessionMaster.hasMany(models.User, { foreignKey: "userId" });
        }
      }
    }
  );

  return sessionMaster;
};
