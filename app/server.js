const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const swaggerJsDoc = require("swagger-jsdoc");
const SwaggerUI = require("swagger-ui-express")
const cookie = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const { AllRouter } = require("./router/router");
const { error } = require("console");
const createHttpError = require("http-errors");
module.exports = class Application{
    #App =express();
    #DB_URL;
    #PORT;
    constructor(PORT,DB_URL){
    this.#PORT =PORT;
    this.#DB_URL =DB_URL;
    this.ConfigApplication();
    this.InitRedis();
    this.ConnectToMongoDB(DB_URL);
    this.CreateServer(PORT);
    this.CreateRoutes();
    this.ErrorHandler()

    }
ConfigApplication(){
this.#App.use(cors({origin:"*"}));
this.#App.use(morgan("dev"))
this.#App.use(express.json());
this.#App.use(express.urlencoded({extended:true}))
this.#App.use(cookie());
this.#App.use(express.static(path.join(__dirname,"..","public")));
this.#App.use("/api-doc",SwaggerUI.serve,SwaggerUI.setup(swaggerJsDoc({
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Shop",
            version:"2.0.0",
            description:"Store for dress",
            contact:{
                name: "zara",
                email:"zahra.st7373@gmail.com",
                url:"https://www.linkedin.com/in/zahra-st"
            }
        },
        servers:[
            {
            url:"http://localhost:5000"
        }
    ],
        components:{
            securitySchema:{
                BearerAuth:{
                    type:"http",
                    schema:"bearer",
                    bearerFormat:"JWT"
                }
            }
        },
        security:[{BearerAuth:[]}]
    },
    apis:["./app/router/**/*.js"]
}),
   {explorer:true}
))
}
CreateServer(PORT){
    const http = require("http")
    http.createServer(this.#App).listen(this.#PORT,()=>{
        console.log(`run => http://localhost:${this.#PORT}`);
    })
}
ConnectToMongoDB(DB_URL){
    main().catch(err => console.log(err));
    async function main() {
        await mongoose.connect(DB_URL)
            .then(() => console.log('Connected to MongoDB.'))
            .catch(err => console.error('Could not Connected to MongoDB.', err));
    }
    mongoose.connection.on("Connected",()=>{
        console.log("Mongoose connection on Database..❇");
    })
    mongoose.connection.on("Disconnected",()=>{
        console.log("Mongoose Disconnect on Database..❗");
    })
    process.on("SIGINT",async()=>{
        await mongoose.connection.close()
        process.exit(0)
    })
}
InitRedis(){
    require("./utils/initredis")
}
CreateRoutes(){
    this.#App.use(AllRouter)
}

ErrorHandler(){
    this.#App.use((req,res,next)=>{
        next(createHttpError.NotFound("Page not found"))
    })
    this.#App.use((err,req,res,next)=>{
        const servererror = createHttpError.InternalServerError();
        const statusCode = err.status || servererror.message
        const message = err.message || servererror.message
        return res.status(statusCode).json({
            statusCode,
            message
        })
    })
}
}