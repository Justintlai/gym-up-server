"use strict";
const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs
module.exports = function(sequelize, DataTypes) {
  //model
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, //allow ID key to auto-generate
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    },
    DOB: DataTypes.DATEONLY,
    gender: DataTypes.CHAR(1),
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  });
  //Class Method
  User.associate = function(models) {
    User.hasMany(models.sessionMaster, { foreignKey: "id" });
  };

  // User.validPassword = function(user, password) {
  //   // console.log("validating password: ", password);
  //   // console.log("user password", user.password);
  //   return bcrypt.compareSync(password, user.password);
  // };

  // User.hook("beforeCreate", function(user) {
  //   const salt = bcrypt.genSaltSync();
  //   user.password = bcrypt.hashSync(user.password, salt);
  // });

  return User;
};
