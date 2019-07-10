const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/checkLogin').checkNotLogin
// 登入
router.get('/signIn', checkNotLogin, function(req, res, next) {
  res.send('hello, express')
})
// 登出
router.get('/signOut', checkNotLogin, function(req, res, next) {
  res.send('hello, express')
})
// 注册
router.get('/signUp', checkNotLogin, function(req, res, next) {
  res.send('hello, express')
})

module.exports = router
