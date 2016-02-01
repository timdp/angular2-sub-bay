module.exports = function (app) {
  console.info('Creating sample subs')
  const subs = []
  for (let id = 1; id <= 10; ++id) {
    const price = 3 + Math.round(Math.random() * 20) / 10
    subs.push({id, name: `Sub ${id}`, price})
  }
  app.models.Sub.create(subs, err => {
    if (err) throw err
    console.info('Sample subs created')
  })
}
