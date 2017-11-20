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
          isEmail: true //test with sequelize in-built function if uesr has entered email
        }
      },
      password: {
        type: DataTypes.TEXT
      },
      DOB: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true //test for date in right format
        }
      },
      gender: {
        type: DataTypes.CHAR(1),
        //http://docs.sequelizejs.com/manual/tutorial/models-definition.html#validations
        validate: {
          len: {
            args: [1, 1],
            msg: "Please select a gender"
          },
          MorFYN: function(genderVal) {
            //test to ensure that only M or F is accepted
            if (genderVal != "M" && genderVal != "F") {
              throw new Error("Please Select either M or F");
            } else {
              //..
            }
          }
        }
      }
    },
    {
      classMethods: {
        validPassword: function(password, passwd, done, user) {
          bcrypt.compare(password, passwd, function(err, isMatch) {
            if (err) console.log(err);
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        },
        associate: function(models) {
          User.hasMany(models.sessionMaster, { foreignKey: "userId" });
        }
      }
    },
    {
      //optional functions added here
      hooks: {
        //hash the password after it has been validated for entry
        afterValidate: function(user) {
          user.password = bcrypt.hashSync(user.password, 8);
        }
      }
    }
  );

  return User;
};
