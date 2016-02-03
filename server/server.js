import loopback from 'loopback'
import {PassportConfigurator} from 'loopback-component-passport'
import boot from 'loopback-boot'

const passportProviderConfig = require('./passport-providers.json')

const app = loopback()

app.start = () => app.listen(() => {
  app.emit('started')
  const baseUrl = app.get('url').replace(/\/$/, '')
  console.log('Web server listening at: %s', baseUrl)
  if (app.get('loopback-component-explorer')) {
    const explorerPath = app.get('loopback-component-explorer').mountPath
    console.log('Browse your REST API at %s%s', baseUrl, explorerPath)
  }
})

app.get('/api/auth/completed', (req, res) => {
  const token = req.accessToken
  if (token) {
    res.redirect(`http://localhost:4000/identify?token=${token.id}`)
  } else {
    res.redirect('/api/auth/failed')
  }
})

app.get('/api/auth/failed', (req, res, next) => {
  // TODO
  next()
})

app.delete('/api/session', (req, res) => {
  req.logout()
  res.json({success: true})
})

boot(app, __dirname, err => {
  if (err) throw err

  app.middleware('auth', loopback.token({
    model: app.models.accessToken
  }))
  app.middleware('session:before', loopback.cookieParser(app.get('cookieSecret')))
  app.middleware('session', loopback.session({
    secret: 'keyboard dog',
    saveUninitialized: true,
    resave: true
  }))

  const passportConfigurator = new PassportConfigurator(app)
  passportConfigurator.init()
  passportConfigurator.setupModels({
    userModel: app.models.User,
    userIdentityModel: app.models.UserIdentity,
    userCredentialModel: app.models.UserCredential
  })
  for (const name of Object.keys(passportProviderConfig)) {
    const providerConfig = passportProviderConfig[name]
    providerConfig.session = !!providerConfig.session
    passportConfigurator.configureProvider(name, providerConfig)
  }

  if (require.main === module) {
    app.start()
  }
})

module.exports = app
