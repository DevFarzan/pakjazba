var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');



var UserSchema = new mongoose.Schema({
  username: {type: String },
  email:    {type: String, index: true, unique: true, required: true,uniqueCaseInsensitive: true },
  password: {type:String},
  InsertedDate:Array,
  subscribe: {type: Boolean ,  default: false },
  status:   {type: Boolean ,  default: false },
  blocked: {type:Boolean , default:false},
  loginvia:{type: String},

});
UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);