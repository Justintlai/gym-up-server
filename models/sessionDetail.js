"use strict";

module.exports = function(sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var sessionDetail = sequelize.define(
    "sessionDetail",
    {
      sessionDetailId: {
        type: DataTypes.INTEGER,
        autoIncrement: true, //allow ID key to auto-generate
        primaryKey: true
      },
      workoutID: {
        type: DataTypes.INTEGER
      },
      workoutOrder: {
        type: DataTypes.INTEGER,
        validate: {
          isDate: true //test for date in right format
        }
      },
      reps: {
        type: DataTypes.INTEGER,
        validate: {
          isDate: true //test for date in right format
        }
      },
      weight: {
        type: DataTypes.FLOAT
      }
    },
    {
      classMethods: {
        associate: function(models) {
          sessionDetail.belongsTo(models.sessionMaster, {
            foreignKey: "sessionMasterId"
          });
        }
      }
    }
  );

  return sessionDetail;
};
