const { app } = require('.')
const { connectDb } = require('./config/db')
require('dotenv').config()

const PORT = process.env.PORT || 5454

app.listen(PORT, async () => {
  await connectDb()
  console.log('ecommerce API listening on port', PORT)
})
