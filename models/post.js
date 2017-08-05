module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    }
     ts: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to a burger
    // A Post can't be created without an burger due to the foreign key constraint
    Post.belongsTo(models.burger, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};