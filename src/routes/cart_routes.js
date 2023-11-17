const cartRoutes=require("express").Router();
const cartController=require("./../controllers/cart_controller");
cartRoutes.post("/",cartController.getUserCart);
cartRoutes.get("/:user",cartController.addToCart);
cartRoutes.delete("/",cartController.removeFromCart);
module.exports=cartRoutes;