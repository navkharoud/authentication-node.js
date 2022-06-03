var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    uname: String,
    pass: String,
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;