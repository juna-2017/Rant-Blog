const User = require('./User');
const Topic = require('./Topic');
const Post = require('./Post');
const Comment = require('./Comment')

User.hasMany(Topic, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Topic.belongsTo(User, {
  foreignKey: 'user_id'
});
Topic.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.belongsTo(Topic, {
  foreignKey: 'user_id'
});
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Post, {
  foreignKey: 'user_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Topic, Post, Comment };