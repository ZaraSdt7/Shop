
const redisClient = require("../utils/initredis");
(async ()=>{
   await  redisClient.set("key","value")
   const value = await redisClient.get("key")
   console.log(value);
})()
const router = require("express").Router();
module.exports={
    AllRouter :router
}