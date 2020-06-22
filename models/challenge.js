module.exports = function(sequelize, DataTypes) {
  const Challenge = sequelize.define("Challenge", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    challenge_type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    // Challenge extended to a friend - Y/N or T/F
    challenge_extend: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    // Challenge accepted by a friend - T/F
    challenge_status: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    // Member ID for member that extended the challenge
    user_id: {
      allowNull: false,
      autoIncrement: false,
      type: DataTypes.INTEGER
    }
  });

  return Challenge;
};
