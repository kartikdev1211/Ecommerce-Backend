const categoryModel=require("./../models/category_model");
const categoryController={
    createCategory:async function(req,res){
        try{
            const categoryData= req.body;
            const newCategory=new categoryModel(categoryData);
            await newCategory.save();
            return res.json({success:true,data:newCategory,message:"Category created"});
        }catch(exp){
            return res.json({success:false,message:exp});
        }
    },
    fetchAllCategory:async function(req,res){
        try{
            const categories=await categoryModel.find();
            return res.json({success:true,data:categories});
        }catch(exp){
            return res.json({success:false,message:exp});
        }
    },
    fetchCategoryById:async function(req,res){
        try{
            const id=req.params.id;
            const foundCategories=await categoryModel.findById(id);
            if(!foundCategories){
                return res.json({success:false,message:"Category not found"});    
            }
            return res.json({success:true,data:foundCategories});
        }catch(exp){
            return res.json({success:false,message:exp});
        }
    },
};
module.exports=categoryController;