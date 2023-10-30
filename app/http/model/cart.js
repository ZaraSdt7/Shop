const { default: mongoose } = require("mongoose");

const Cartschema = new mongoose.Schema({
productID:{type:mongoose.Types.ObjectId , ref:"product",required:true},
userID:{type:mongoose.Types.ObjectId , ref:"user", required:true},
count:{type:Number , required:true},
image:{type:String}    
},{
    timestamps:true
})
Cartschema.virtual("imageUrl").get(function(){
    return this `${process.env.URL_BASE}:${process.env.PORT}/${this.image}`
})
module.exports={
    Cartmodel:mongoose.model("cart",Cartschema)
}