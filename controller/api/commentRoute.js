const router = require('express').Router();
const { Comment } = require('../../models');

// This route should let us create new comments
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create();

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;