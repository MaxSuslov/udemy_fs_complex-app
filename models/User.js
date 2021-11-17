const validator = require("validator")

let User = function(data) {
this.data = data 
this.errors = []
}

User.prototype.cleanup = function () {
   if (typeof(this.data.username) != "sting") {this.data.username = ""}
   if (typeof(this.data.email) != "sting") {this.data.email = ""}
   if (typeof(this.data.password) != "sting") {this.data.password = ""}

   // get rid of any bogus properties
   this.data = {
      username: this.data.username.trim().toLowerCase(),
      email: this.data.email.trim().toLowerCase(),
      password: this.data.password
   }
}

User.prototype.validate = function() {
   if (this.data.username == "") {this.errors.push("You must provide a username")}
   if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain numbers and letters")}
  // using validator npm package (npm install validator); validator.isEmail() returns boolean
   if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email address")}
   if (this.data.password == "") {this.errors.push("You must provide a password")}
   if (this.data.password.length > 0 && this.data.password < 12) {this.errors.push("Password must be at least 12 characters")}
   if (this.data.password.length > 100) {this.errors.push("Password cannot exceed 100 characters")}
   if (this.data.username.length > 0 && this.data.password < 3) {this.errors.push("Username must be at least 3 characters")}
   if (this.data.username.length > 30) {this.errors.push("Username cannot exceed 30 characters")}
 }

User.prototype.register = function() {
   // Step #1: Validate user data
  this.cleanUp()
  this.validate()

   // Step #2: Only if there are no validation errors
   // then save the user data in the database
}

module.exports = User