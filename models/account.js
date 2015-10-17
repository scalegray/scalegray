var mongoose =  require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Account', new Schema({

  email: String,
  password: String,
  admin: Boolean


}));
