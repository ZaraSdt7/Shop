const httpStatus = require("http-status");
const Controller = require("../controller");

module.exports =  new class HomeController extends Controller{
    async Shop_Page(req,res,next){
        try {
            return res.status(httpStatus.OK).send("Shop store")
        } catch (error) {
            next(error)
        }
    }
}();