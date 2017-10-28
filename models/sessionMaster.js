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
      intensity: {
        type: DataTypes.INTEGER
      },
      start: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true //test for date in right format
        }
      },
      finish: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true //test for date in right format
        }
      },
      comments: {
        type: DataTypes.CHAR(1)
      }
    },
    {
      classMethods: {
        associate: function(models) {
          sessionMaster.belongsTo(models.User, { foreignKey: "userId" });
        }
      }
    }
  );

  return sessionMaster;
};
