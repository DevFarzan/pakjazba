var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    availableTickets:{type:String},
    city:{type:String},
    dateRange:{type:Array},
    delivery:{type:Array},
    description:{type:String},
    email:{type:String},
    eventCategory:{type:String},
    eventTitle:{type:String},
    images:{type:Array},
    name:{type:String},
    number:{type:String},
    paymentMode:{type:Array},
    price:{type:String},
    state:{type:String},
    totalTickets:{type:String},
    free:{type:Boolean},
    website:{type:String},
    faceBook:{type:String},
    linkdIn:{type:String},
    google:{type:String},
    userId:{type:String},
    profileId:{type:String},
    randomKey:{type:String},
    objectId:{type:String},
    posted:{type:String}
});

mongoose.model('EventSchema',EventSchema);
