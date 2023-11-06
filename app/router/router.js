
const redisClient = require("../utils/initredis");
const { AdminRouter } = require("./Admin/admin.router");
const { HomeApi } = require("./Api");
const AuthRouter = require("./user/Auth.router");
(async ()=>{
   await  redisClient.set("key","value")
   const value = await redisClient.get("key")
   console.log(value);
})()
const router = require("express").Router();
//router.use("/admin",AdminRouter)
//router.use("/user",AuthRouter)
router.use("/",HomeApi)
module.exports={
    AllRouter :router
}