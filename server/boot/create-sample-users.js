import async from 'async'

module.exports = function (app) {
  const {User, Role, RoleMapping} = app.models
  const user = {username: 'admin', password: 'admin', email: 'admin@domain.com'}
  console.info('Creating sample user')
  async.waterfall([
    cb => User.create(user, cb),
    (_, cb) => Role.create({name: 'admin'}, cb),
    (role, cb) => role.principals.create({
      principalType: RoleMapping.USER,
      principalId: user.id
    }, cb)
  ], err => {
    if (err) throw err
    console.info('Sample user created')
  })
}
