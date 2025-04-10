const mongoose = require('mongoose')
require('dotenv').config()
const mongoDbUrl = process.env.MONGO_URI
const connectDb = () => {
  return mongoose.connect(mongoDbUrl)
}

module.exports = { connectDb }
