const router = require('express').Router();
const { User } = require('../../models')



router.post('/', async (req, res) => {
  console.log({ req, res })
  try {
    const userData = await User.create(req.body);
if (!userData) {
  res
  .status(400)
   .json({message: 'Failed to create user. Please try again'});
}
    console.log(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    res.json({ user: userData, message: 'You are now logged in!' });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  // console.log ({req})
  console.log(req.session);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;