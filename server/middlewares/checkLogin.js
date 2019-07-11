module.exports = {
  checkLogin: (req, res, next) => {
    if (!req.session.user) {
      res.redirect('signIn')
    }
    next()
  },
  checkNotLogin: (req, res, next) => {
    if (req.session.user) {
      // todo: 已登录，返回上一个页面
    }
    next()
  }
}
