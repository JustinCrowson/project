const router = require('express').Router();
const { snk } = require('../../models');

// Add score to database
router.post('/snake/:id', async (req, res) => {
  try {
    const snakeData = await snk.create({
      snake_score: req.body.snake_score
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(snakeData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update score in database
router.put('/snake/:id', async (req, res) => {
    try {
        const snakeData = await snk.update({
            snake_score: req.body.snake_score
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;