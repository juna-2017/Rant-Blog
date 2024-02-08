const router = require('express').Router();
const userRoute = require('./userRoute');
const topicRoute = require('./topicRoute');

router.use('/users', userRoute);
router.use('/topics',topicRoute);

module.exports = router;