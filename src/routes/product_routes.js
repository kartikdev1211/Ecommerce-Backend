const productRoutes=require("express").Router();
const productController=require("./../controllers/product_controller");
productRoutes.get("/",productController.fetchAllProducts);
productRoutes.get("/category/:id",productController.fetchProductByCategory);
productRoutes.post("/",productController.createProduct);
module.exports=productRoutes;