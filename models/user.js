"use strict";
const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs
module.exports = function(sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true, //allow ID key to auto-generate
        primaryKey: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      DOB: DataTypes.DATEONLY,
      gender: DataTypes.CHAR(1)
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.sessionMaster, { foreignKey: "userId" });
        }
      }
    }
  );

  return User;
};
