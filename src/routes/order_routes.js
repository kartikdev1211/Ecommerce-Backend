const orderRoutes=require("express").Router();
const orderController=require("./../controllers/order_controller");
orderRoutes.post("/",orderController.creatOrder);
orderRoutes.get("/:userId",orderController.fetchUserOrders);
orderRoutes.put("/updateStatus",orderController.updateOrderStatus);
module.exports=orderRoutes;