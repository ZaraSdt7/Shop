const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
user_name :{type:String , required:true , lowercase:true},
mobile:{type: String , required:true , unique:true},
address:{type:Object,default:{
    city:{type:String},
    street:{type:String},
    zipcode:{type:String}
}},
otp:{type:Object,default:{
    code:0,
    expiresIN:0
}},
bills:{type:[],default:[]},
discount:{type:Number,default:0},
role:{type:[String] , default:"USER"},
products:{type:[mongoose.Types.ObjectId],ref:"product",default:[]},
bascket:{type:[]}

},{
    timestamps:true,
    toJSON:{
        virtuals:true
    }
})
UserSchema.index({user_name:"text",mobile:"text",address:"text"})
