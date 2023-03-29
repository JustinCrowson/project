const router = require('express').Router();
const { nic } = require('../../models');

router.post('/wins', async (req, res) => {
    try {
        const nicData = await nic.create({
            wins: 0
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.put('/wins', async (req, res) => {
    try {
        const nicData = await nic.update({
            wins: req.body.wins
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// router.get('/wins', async (req, res) => {
//     try {
//         const nicData = await nic.
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
// })


module.exports = router;
