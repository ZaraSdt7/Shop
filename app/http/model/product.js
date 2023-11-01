const { default: mongoose } = require("mongoose");
const { Comentschema } = require("./public.schema");

const Productschema = new mongoose.SchemaType({
nema_product:{type:String , required:true},
category:{type:mongoose.Types.ObjectId , ref:"category"},
subcategory:{type :[String], required:true},  //نوع لباس
description:{type:String , required: true},
detail:{type:String , required:true},  //جزئیات محصول  
image:{type:[String],required:true}, 
color:{type:[String] , required:true},
size:{type:[String] , required:true ,default:"free size"},
size_detail:{type:Object, default:{
    waist: "",
    chest: "",
    sleeve: "",
    height: "",
    width: ""    
}},
likes:{type:[mongoose.Types.ObjectId], ref:"user",default:[]},
dislikes:{type:[mongoose.Types.ObjectId],ref:"user",default:[]},
rate:{type:Number,default:[]},
bookmarks:{type:[mongoose.Types.ObjectId],ref:"user",default:[]},
supplier:{type:mongoose.Types.ObjectId , ref:"user"},
price:{type:Number, required:true,default:[] },
discount:{type:Number , required:true , default:[]},
count:{type:Number },
comment:{type:[Comentschema],default:[]}

},{
   timestamps:true,
   toJSON:{
    virtuals:true
   }
})
Productschema.index({name_product:"text",subcategory:"text",detail:"text"})
Productschema.virtual("imageUrl").get(function(){
    return this.image.map(img => `${process.env.URL_BASE}:${process.env.PORT}/${img}`)
})
module.exports ={
    Productmodel:mongoose.model("product",Productschema)
}
