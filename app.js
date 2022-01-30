const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const app = express()

let sessionOptions = session({
  secret: "JavaScript is sooooooooo coool",
  //in original video it was so >>> store: new MongoStore({client: require('./db')}), // it was also (session) after require('connect-mongo')
  store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

app.use(sessionOptions)
app.use(flash())

const router = require('./router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('public'))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app