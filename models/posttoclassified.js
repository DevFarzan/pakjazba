var mongoose = require('mongoose');
var config = require('../config/config');
var uniqueValidator = require('uniqueValidator');


var postclassifiedSchema = new mongoose.Schema({
	name:{type:String},
	email:{type:String},
	number:{type:String},
	modeofcontact:{type:String},
	delivery:{type:String},
	address:{type:String},
	condition:{type:String},
	sizedimension:{type:String},
	modelnumber:{type:String},
	userid:{type:String},
	classifiedimages:{type:Array},
	city:{type:String},
	postingtype:{type:String},
	classifiedcategory:{type:String},
	classifiedtitle:{type:String},
	descriptiondetail:{typ:String},
	classifiedprice:{type:String},
	hideprice:{type:Boolean},
	delivery:{type:String},
});

postclassifiedSchema.plugin(uniqueValidator);
mongoose.model('postclassified',postclassifiedSchema);