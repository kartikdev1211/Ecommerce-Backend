const userRoutes=require("express").Router();
const userController=require("./../controllers/user_controller");
userRoutes.post("/createAccount",userController.createAccount);
userRoutes.post("/signIn",userController.signIn);
module.exports=userRoutes;