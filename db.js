const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


// 3 parameters: where to connect (connectionString), params (in future mongoDB versions should be omitted), actually function what to do
MongoClient.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
// makes database available in every file where it is required (including its collection(s))
  module.exports = client
  const app = require('./app')
  app.listen(process.env.PORT)
})