const { default: mongoose } = require("mongoose");

const Categoryschema = new mongoose.Schema({
title:{type:String , required:true},
parent:{type:mongoose.Types.ObjectId , ref:"category" , default:undefined}    
},{
    id:false,
    toJSON:{
        virtuals:true
    }
})
Categoryschema.virtual("children",{
    ref:"category",
    localField:"_id",
    foreignField:"parent"
})
function autopopulate(next){
    this.populate([{path:"children",select:{__v:0 , id:0}}])
    next()
}
Categoryschema.pre('findOne',autopopulate).pre('find',autopopulate)

module.exports={
    Categorymodel:mongoose.model("category",Categoryschema)
}