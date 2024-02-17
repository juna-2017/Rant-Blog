const router = require('express').Router();
const { Topic, Post, Comment } = require('../models');

// this route renders all topics to homepage once user logs in
router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const topicData = await Topic.findAll(
        );

        // Serialize data so the template can read it
        const topics = topicData.map((topic) => topic.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            topics,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


// this route should render the topic individually
router.get('/topic/:id', async (req, res) => {
    try {
        const topicData = await Topic.findByPk(req.params.id,
        );

        const topic = topicData.get({ plain: true });

        res.render('homepage', {
            ...topic,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});






module.exports = router;