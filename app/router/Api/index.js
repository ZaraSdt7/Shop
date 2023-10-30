const homeController = require("../../http/controller/api/home.controller");

const router = require("express").Router();
/**
 * @swagger
 * /:    
 *  get:
 *      summary: index of routes
 *      tags: [(Home_Shop)]
 *      description: get all need date for index page
 *      parameters:
 *         -    in: header
 *              name: access-token
 *              example: Bearer YourToken...
 *      responses:
 *          200:
 *            description: success
 *            schema: 
 *                  type: string
 *                  example: home page        
 *          404:
 *            description: Not Found
 */
router.get("/",homeController.Shop_Page)
module.exports={
    HomeApi:router
}