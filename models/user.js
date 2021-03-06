// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },

    weight: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    height: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING
    }
    // activeMins: {
    //   allowNull: true,
    //   type: DataTypes.INTEGER
    // },
    // carbIntake: {
    //   allowNull: true,
    //   type: DataTypes.INTEGER
    // },
    // proteinIntake: {
    //   allowNull: true,
    //   type: DataTypes.INTEGER
    // },
    // fatIntake: {
    //   allowNull: true,
    //   type: DataTypes.INTEGER
    // }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
