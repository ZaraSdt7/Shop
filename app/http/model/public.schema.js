const { default: mongoose } = require("mongoose");

const Answerschema = new mongoose.Schema({
userID:{type:mongoose.Types.ObjectId , ref:"user", required:true},
ProductID:{type:mongoose.Types.ObjectId, ref:"product", required:true},
comment:{type:String , required:true},
show:{type:Boolean , required:true , default:false},
opentocomment:{type:Boolean , default:false}    
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    }
})
const Comentschema = new mongoose.Schema({
userID:{type:mongoose.Types.ObjectId , ref:"user", required:true},
ProductID:{type:mongoose.Types.ObjectId , ref:"product", required:true},
comment:{type:String , required:true},
show:{type:Boolean , required:true , default:false},
opentocomment:{type:Boolean , default:false},
answer:{type:[Answerschema],default:[]}    
},{
    timestamps:true

})
module.exports={
    Comentschema,
    Answerschema
}