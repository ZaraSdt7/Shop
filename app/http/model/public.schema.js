const { default: mongoose } = require("mongoose");

const Replyschema = new mongoose.Schema({
userID:{type:mongoose.Types.ObjectId , ref:"user", required:true},
comment:{type:String , required:true},   
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    }
})
const Rateschema = new mongoose.Schema({
ProductID:{type:mongoose.Types.ObjectId , ref:"product" , required:true},
userID:{type:mongoose.Types.ObjectId , ref:"user", required:true},
rating:{type:Number , default:0}    
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    }
})
const Commentschema = new mongoose.Schema({
userID:{type:mongoose.Types.ObjectId , ref:"user", required:true},
ProductID:{type:mongoose.Types.ObjectId , ref:"product", required:true},
comment:{type:String , required:true},
show:{type:Boolean , required:true , default:false},
opentocomment:{type:Boolean , default:false},
reply:{type:[Replyschema],ref:"comment",default:[]}    
},{
    timestamps:true

})
module.exports={
    Commentschema,
    Rateschema
}