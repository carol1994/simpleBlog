module.exports = (app) => {
  app.use('/', require('./sign'))
  app.use('/blog', require('./blog'))
}
