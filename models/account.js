var mongoose =  require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Account', new Schema({

  name: String,
  email: String,
  password: String,
  admin: Boolean


}));
