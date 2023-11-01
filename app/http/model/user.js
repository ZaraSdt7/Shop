const { default: mongoose } = require("mongoose");
const { Cartmodel } = require("./cart");
const Productschema = new mongoose.Schema({
ProductID:{type :mongoose.Types.ObjectId , ref :"product"},
})
const Cartschema = new mongoose.Schema({
    productID:{type:[Productschema],required:true},
    userID:{type:mongoose.Types.ObjectId , ref:"user", required:true},
    count:{type:Number , required:true},
    image:{type:String}    
    })
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
products:{type:mongoose.Types.ObjectId,ref:"product",default:[]},

bascket:{type:Cartschema},
accesstoken:{type:String,default:''},
RefreshToken:{type:String,default:''}


},{
    timestamps:true,
    toJSON:{
        virtuals:true
    }
})
UserSchema.index({user_name:"text",mobile:"text",address:"text"})

module.exports ={
    Usermodel:mongoose.model("user",UserSchema)
}