const sequelize = require('../config/connection');
const { User, Topic, Post, Comment } = require('../models');

const userData = require('./userData.json');
const topicData = require('./topicData.json');
const postData = require('./postData.json')
const commentData = require('./commentData.json')


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Topic.bulkCreate(topicData, {
      individualHooks: true,
      returning: true,
    });
    await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });
    await Comment.bulkCreate(commentData, {
      individualHooks: true,
      returning: true,
    });
      process.exit(0);
    };
    
    seedDatabase();