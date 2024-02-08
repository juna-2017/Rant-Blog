const router = require('express').Router();
const { Topic, Post, Comment } = require('../models');

// this is rendering all topics to homepage
router.get('/', async (req, res) => {
    try {
        const topicData = await Topic.findAll();

        const topics = topicData.map((topic) => topic.get({ plain: true }));

        res.render('homepage', { topics });
    } catch (err) {
        res.status(500).json(err);
    }
});

// this route gets the topic associated with that id # along with comments linked to the topic
router.get('/topic/:id', async (req, res) => {
    try {
        const topicData = await Topic.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ['text'],
                },
            ],
        });

        const topic = topicData.get({ plain: true });

        res.render('homepage', { ...topic, });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;