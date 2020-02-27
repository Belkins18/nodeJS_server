const express = require('express');
const router = express.Router();

/**
 * @param {object} req - input data
 * @param {object} res - output data
 * @returns {any}
 */
router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.render('form', { title: 'Registration form' });
});

module.exports = router;