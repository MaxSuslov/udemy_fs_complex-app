const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


// 3 parameters: where to connect (connectionString), params (in future mongoDB versions should be omitted), actually function what to do
MongoClient.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
  // 
  module.exports = client.db()
  const app = require('./app')
  app.listen(process.env.PORT)
})