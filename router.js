// //// is executed immediately after require in app.js
// console.log("I am executed immediately.")
// //// is executed when the "router" variable is used where it was required, you can use router.name or router.meow()
// module.exports = {name: "Meosalot", species: "cat", meow: function(){console.log("Meowwww!")}}

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.render('home-guest')
})


module.exports = router