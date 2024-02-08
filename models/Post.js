const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Post } = require('../controller');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }},
        topic_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'topic',
                    key: 'id',
                }},

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post',
    }
);

module.exports = Post;