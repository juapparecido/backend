const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(4091, () => {
    console.log('Backend executando...')
})
