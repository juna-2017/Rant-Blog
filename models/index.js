const User = require('./User');
const comment = require('./comment');

User.hasMany(comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, comment };