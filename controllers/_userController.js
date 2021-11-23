const User = require('../models/User')

exports.login = function(req, res) {
  // req.body is data from request posted via <form action="/login"> 
  let user = new User(req.body)
  user.login().then(function(result) {
    req.session.user = {favColor: "blue", username: user.data.username}
    req.session.save(function(){
      res.redirect('/')
    })
  }).catch(function(err) {
    // 'errors' in flash is an array, the second arg is the message that you want to include in that array. You can add string of text or use params from .reject option of promise in User.js
    req.flash('errors', err)
    // .flash() package is helping us to add/remove data from our session. It's adding a new object named "flash": {"errors":["Invalid username/password"]} into sessions
    // flash object is being emptied after the first login attempt, so the user sees the error message only once, flash obj is just temporary storing error messages in session
    req.session.save(function(){
      res.redirect('/')
    })
  })
}

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/')
  })
}

exports.register = function(req, res) {
  let user = new User(req.body)
  user.register().then(()=>{
    req.session.user = {username: user.data.username}
    req.session.save(function(){
      res.redirect('/')
    })
  }).catch((regErrors)=>{
    regErrors.forEach(function(error){
      req.flash('regErrors', error)
    })
    // manually save the data and after it's completed, redirect user to the home page
    req.session.save(function(){
      res.redirect('/')
    }) 
  })
}

exports.home = function(req, res) {
  if (req.session.user) {
    res.render('home-dashboard', {username: req.session.user.username})
  } else {
    res.render('home-guest', {errors: req.flash('errors'), regErrors: req.flash('regErrors')})
  }
}
 