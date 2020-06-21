module.exports = function(sequelize, DataTypes) {
  const Friend = sequelize.define("Friend_List", {
    friendId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isName: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isName: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });

  return Friend;
};
