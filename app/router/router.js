
const redisClient = require("../utils/initredis");
const { HomeApi } = require("./Api");
(async ()=>{
   await  redisClient.set("key","value")
   const value = await redisClient.get("key")
   console.log(value);
})()
const router = require("express").Router();
router.use("/",HomeApi)
module.exports={
    AllRouter :router
}