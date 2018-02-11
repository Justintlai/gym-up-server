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
    User.hasMany(models.sessionMaster, { foreignKey: "userId" });
  };

  User.validatePassword = function(password, passwordHash, callback) {
    console.log("validating password: ", passwordHash);
    console.log("user password", password);
    var isValidPassword = bcrypt.compareSync(password, passwordHash);
    if (isValidPassword) {
      console.log("isValidPassword: ", isValidPassword);
      callback(null, isValidPassword);
    } else {
      console.log("Not Valid");
      callback("Password Not Valid");
    }
  };

  User.hook("beforeCreate", function(user) {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  });

  return User;
};
