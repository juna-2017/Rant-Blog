const router = require('express').Router();
const userRoutes = require('./');
const blogEntryRoutes = require('./');

router.use('/users', userRoutes);
router.use('/blogEntry', blogEntryRoutes);

module.exports = router;