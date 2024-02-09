const router = require('express').Router();
const { Topic, Post, Comment } = require('../models');

// // this is rendering all topics to homepage
// router.get('/', async (req, res) => {
//     try {
//         const topicData = await Topic.findAll();

//         const topics = topicData.map((topic) => topic.get({ plain: true }));

//         res.render('homepage', { topics });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // this route gets the topic associated with that id # along with comments linked to the topic
// router.get('/topic/:id', async (req, res) => {
//     try {
//         const topicData = await Topic.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: Comment,
//                     attributes: ['text'],
//                 },
//             ],
//         });

//         const topic = topicData.get({ plain: true });

//         res.render('homepage', { ...topic, });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



// module.exports = router;

// this route renders all topics to homepage once user logs in
router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const topicData = await Topic.findAll(
            // include: [
            //   {
            //     model: User,
            //     attributes: ['name'],
            //   },
            // ],
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
            // include: [
            //   {
            //     model: User,
            //     attributes: ['name'],
            //   },
            // ],
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