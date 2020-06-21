module.exports = function(sequelize, DataTypes) {
  const Blog = sequelize.define("Blog", {
    blogiId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    entryId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    blogPostTitle: {
      allowNull: false,
      type: DataTypes.STRING
    },
    blogPost: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  });

  return Blog;
};
