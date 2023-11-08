const joi = require("@hapi/joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../../../utils/constants");

const Blogschema = joi.object({
title:joi.string().min(3).max(10).required().error(createHttpError.BadRequest("Invalid send title")),
description:joi.string().min(3).max(20).required().error(createHttpError.BadRequest("Invalid send description")),
content:joi.string().min(4).max(10).required().error(createHttpError.BadRequest("Invalid send content")),
category:joi.string().pattern(MongoIDPattern).error(createHttpError.BadRequest("Invalid send id category not found")),
readingTime:joi.number(),
filename:joi.string().pattern(/(\.png|\.jpg|\.jpeg|\.webp|\.gif)$/).error(createHttpError.BadRequest("Send format photo invalid")),
fileUploadPath:joi.allow()    
})
module.exports={
    Blogschema
}