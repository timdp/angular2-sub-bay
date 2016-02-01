module.exports = app => {
  app.enableAuth()

  app.post('/api/sessions', (req, res, next) => {
    app.models.User.login({
      username: req.body.username,
      password: req.body.password
    }, 'user', (err, token) => {
      if (err) {
        next(err)
      } else {
        res.json({token: token.id})
      }
    })
  })

  app.delete('/api/sessions/current', (req, res, next) => {
    app.models.User.logout(req.query.token, err => {
      if (err) {
        next(err)
      } else {
        res.json({})
      }
    })
  })
}
