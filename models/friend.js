module.exports = function(sequelize, DataTypes) {
    const Friend = sequelize.define("Friend", {
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
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });

return Friend;
};
