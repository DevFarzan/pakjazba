var mongoose = require('mongoose');


var ecommerceProductRating = new mongoose.Schema({
    userId:{type:String},
    data:{type:String},
    time:{type:String},
    name:{type:String},
    email:{type:String},
    message:{type:String},
    productId:{type:String},
});
mongoose.model('ecommercereview',ecommerceProductRating);