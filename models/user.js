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
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      password: DataTypes.STRING,
      fbId: DataTypes.STRING,
      fbToken: DataTypes.STRING,
      fbName: DataTypes.STRING,
      fbEmail: DataTypes.STRING,
      ggId: DataTypes.STRING,
      ggToken: DataTypes.STRING,
      ggName: DataTypes.STRING,
      ggEmail: DataTypes.STRING,
      DOB: DataTypes.DATEONLY,
      gender: DataTypes.CHAR(1),
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active"
      }
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
