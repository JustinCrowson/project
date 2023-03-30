const router = require('express').Router();
const { response } = require('express');
const { User, nic, snk, hang } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ]
    });

    const user = userData.get((user) => user.get({ plain:true }));

    res.render('games', {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Need to debug - route to homepage just in case given route is different
// router.get('*', withAuth, async (req, res) => {
//   try {
//     res.render('games', {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/nictactoe/:user_id', withAuth, async (req, res) => {
  try { 
    const nicData = await nic.findOne({
      where:  {
        user_id: req.params.user_id, 
      }
    });

     const nicWins = nicData.get({ plain: true });

    res.render('nictactoe', {
      ...nicWins,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/snake', withAuth, async (req, res) => {
  try {
    res.render('snake', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/hangman', withAuth, async (req, res) => {
  try {
    res.render('hangman', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/games', withAuth, async (req, res) => {
  try {
    res.render('games', {
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
