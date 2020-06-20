module.exports = function(sequelize, DataTypes) {
    const Goal = sequelize.define("Goal", {
        goal_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        category: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        descript: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        carbs_goal: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        protien_goal: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        fat_goal: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        calories: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        active_mins: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        activity_date: {
            allowNull: false,
            type: DataTypes.DATEONLY            
        },
        time_stamp: {
            allowNull: false,
            type: DataTypes.DATE(6)
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

return Goal;
};
