const User = require("./User");
const Post = require("./Post");

User.hasMany(Post, {
  foreignKey: "user_name",
  onDelete: "CASCADE",
});

module.exports = { User, Post };
