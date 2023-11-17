const categoryRoutes=require("express").Router();
const categoryController=require("./../controllers/category_controller");
categoryRoutes.post("/",categoryController.createCategory);
categoryRoutes.get("/",categoryController.fetchAllCategory);
categoryRoutes.get("/:id",categoryController.fetchCategoryById);
module.exports=categoryRoutes;