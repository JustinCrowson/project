const router = require('express').Router();
const { response } = require('express');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['name', 'ASC']],
    // });

    // const users = userData.map((project) => project.get({ plain: true }));
// ! maybe switch nictactoe with games?
    res.render('nictactoe', {
      // users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/games');
    return;
  }

  res.render('login');
});

router.get('/games', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  console.log(req.session);
  res.render('games');
  
});

module.exports = router;
