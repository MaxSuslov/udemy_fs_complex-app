let User = function(data) {
this.data = data 
//// --> not recommended due to overload if thousends of instances - for every instance a copy of this method is being created
// this.jump = function(){}
}

// Usning this synthax JS will not need to create a copy for each created objects, but each object will have access to this one copy of this method.
User.prototype.register = function() {
   
}

module.exports = User