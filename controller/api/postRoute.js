const router = require('express').Router();
const { Post, User, Topic, Comment } = require('../../models');

// this route renders all posts related to topic
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('posts', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User && Topic && Comment,
                    attributes: ['name'],
                },
            ],
        });

        const post = dbPostData.get({ plain: true });

        res.render('post', { post });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;



