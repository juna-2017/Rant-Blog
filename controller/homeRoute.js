const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// this route renders all posts to homepage once user logs in
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'content', 'date_created'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'date_created', 'post_id', 'user_id'],

                    include:
                    {
                        model: User,
                        attributes: ['username']
                    },
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass posts into homepage template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// this route should render the topic individually
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});






// router.get('/posts', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//         });
//         const posts = postData.map((post) => post.get({ plain: true }));

//         res.render('posts', {
//             posts,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;