const cartRoutes=require("express").Router();
const cartController=require("./../controllers/cart_controller");
cartRoutes.get("/:user",cartController.getUserCart);
cartRoutes.post("/",cartController.addToCart);
cartRoutes.delete("/",cartController.removeFromCart);
module.exports=cartRoutes;