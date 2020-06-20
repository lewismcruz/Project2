module.exports = function(sequelize, DataTypes) {
  const Goal = sequelize.define("Goals", {
    goalId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descript: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    carbsGoal: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    protienGoal: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    fatGoal: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    calories: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    activeMins: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    activityDate: {
      allowNull: false,
      type: DataTypes.DATEONLY
    }
  });

  return Goal;
};
