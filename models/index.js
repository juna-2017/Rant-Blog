const User = require('./User');
// const Topic = require('./Topic');
const Post = require('./Post');
const Comment = require('./Comment');

// Post.hasOne(Topic, {
//   foreignKey: 'topic_id',
//   onDelete: 'CASCADE'
// });
// Topic.belongsTo(Post, {
//   foreignKey: 'topic_id'
// });
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.belongsTo(User, {
  foreignKey: 'user_id'
});
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };