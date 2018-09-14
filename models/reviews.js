var mongoose = require('mongoose');


var reviewSchema = new mongoose.Schema({
	objid:{type:String},
	name:{type:String},
	email:{type:String},
	message:{type:String},
	star:{type:String},
});
mongoose.model('reviewschema',reviewSchema);