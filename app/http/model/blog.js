const { default: mongoose } = require("mongoose");
const { Comentschema } = require("./public.schema");

const Blogschema = new mongoose.Schema({
author:{type:mongoose.Types.ObjectId , ref:"user",requried:true},
title:{type:String ,requried:true},
description:{type:String , requried:true},
content:{type:String , requried:true}, //محتوا
category:{type:[mongoose.Types.ObjectId], ref:"category"},
comments:{type:[Comentschema],default:[]},
likes:{type:[mongoose.Types.ObjectId] , default:[]},
bookmarks:{type:[mongoose.Types.ObjectId] , default:[]},
readingTime:{type:Number , default:[]},
similarblog:{type:[mongoose.Types.ObjectId] , default:[]}, //مقالات مشابه
image:{type:String, default:[]},
videoAddress:{type:String,default:[]}

},{
    timestamps:true,
    toJSON:{
        virtuals:true
    }
})
Blogschema.virtual("user",{
    ref:"user",
    localField:"_id",
    foreignField:"author"

})
Blogschema.virtual("category_detail",{
    ref:"category",
    localField:"_id",
    foreignField:"category"
})
Blogschema.virtual("imageUrl").get(function(){
    return this `${process.env.URL_BASE}:${process.env.PORT}/${this.image}`
})
Blogschema.virtual("videoUrl").get(function(){
    return this `${process.env.URL_BASE}:${process.env.PORT}/${this.videoAddress}`
})
module.exports={
    Blogmodel:mongoose.model("blog",Blogschema)
}