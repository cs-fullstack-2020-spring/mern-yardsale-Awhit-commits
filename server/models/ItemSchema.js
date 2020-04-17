let mongoose = require('mongoose');

let Schema = mongoose.Schema

let ItemSchema = new Schema ({
    itemName:String,
    itemDesc:String,
    itemPrice:Number

},{timestamps:true})

module.exports= mongoose.model('itemCollection200417',ItemSchema)