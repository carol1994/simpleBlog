const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/checkLogin').checkLogin
router.get('/', function(req, res) {
    res.send({
      status: 200,
      message: 'ok',
      data: 'index data'
    })
})
router.get('/list/:userId', checkLogin, function(req, res) {
  res.render('user', {
    name: req.params.username
  })
})
router.get('/publish', checkLogin, function(req, res) {
  res.render('user', {
    name: req.params.username
  })
})
router.get('/detail/:blogId', function(req, res) {
  res.render('user', {
    name: req.params.username
  })
})

module.exports = router
