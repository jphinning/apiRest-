const app = require('./app')
require('dotenv').config()

console.log(`Running in PORT ${process.env.PORT}`)

app.listen(process.env.PORT || 3001)