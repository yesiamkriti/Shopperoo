const { app } = require('.')
const { connectDb } = require('./config/db')
require('dotenv').config()

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
  await connectDb()
  console.log('ecommerce API listening on port', PORT)
  console.log('MongoDB connected successfully')
})
