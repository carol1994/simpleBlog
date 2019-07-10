const express = require('express')
const router = express.Router()

router.get('/:username', function(req, res) {
    res.render('user', {
        name: req.params.username
    })
})

module.exports = router