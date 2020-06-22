module.exports = function(sequelize, DataTypes) {
  const Member = sequelize.define("Member", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isName: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isName: true
      }
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
      type: DataTypes.STRING,
    },
    weight: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    height: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    active_mins: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    lifetime_total: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    carb_intake: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    protein_intake: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    fatintake: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
