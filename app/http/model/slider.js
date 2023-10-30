const { default: mongoose } = require("mongoose");

const Sliderschema = new mongoose.Schema({
name_products:{type:String},
description:{type:String},
detail:{type:String},
image:{type:String}    
})
module.exports={
    Slidemodel:mongoose.model("slider",Sliderschema)
}