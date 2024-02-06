const sequelize = require('../config/connection');
const { User, Topic, Post, Comment } = require('../models');

const userData = require('./userData.json');
const topicData = require('./topicData.json');
const postData = require('./postData.json')
const commentData = require('./commentData.json')


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const project of topicData) {
        await topic.create({
          ...topic,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
      process.exit(0);
    };
    
    seedDatabase();