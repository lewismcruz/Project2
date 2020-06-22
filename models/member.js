module.exports = function(sequelize, DataTypes) {
  const Member = sequelize.define("Member", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    email: {
      allowNull: false,
      unique: false,
      type: DataTypes.STRING,
      validate: {
        isName: true
      }
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING
    },
    weight: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    height: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    activeMins: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    lifetimeTotal: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    carbIntake: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    proteinIntake: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    fatIntake: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  return Member;
};
