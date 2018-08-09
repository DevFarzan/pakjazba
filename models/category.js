var mongoose = require('mongoose');
var config = require('../config/config')
var uniqueValidator = require('mongoose-unique-validator');

var categorySchema = new mongoose.Schema({
  categoryName:{type:Array, unique: true, required: true,uniqueCaseInsensitive: true},
  insertedDate:Array,
});
categorySchema.plugin(uniqueValidator);
mongoose.model('category',categorySchema);
