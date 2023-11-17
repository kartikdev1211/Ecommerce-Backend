const cartModel=require("./../models/cart_model");
const cartController={
    getUserCart:async function(req,res){
        try{
            const user=req.params.user;
            const foundCart=await cartModel.findOne({user:user});
            if(!foundCart){
                return res.json({success:true,data:[]});
            }
            return res.json({success:true,data:foundCart.items});
        }catch(ex){
            return res.json({success:false,message:ex});
        }
    },
    addToCart:async function(req,res){
        try{
            const {product,user,quantity}=req.body;
            const foundCart=await cartModel.findOne({user:user});
            if(!foundCart){
                const newCart=new cartModel({user:user});
                newCart.items.push({
                    product:product,
                    quantity:quantity
                });
                await newCart.save();
                return res.json({success:true,data:newCart,message:"Product added to Cart"});
            }
            const updatedCart= await cartModel.findOneAndUpdate(
                {user:user},
                {$push:{items:{product:product,quantity:quantity}}},
                {new:true}
            );
            return res.json({success:true,data:updatedCart,message:"Product added to Cart"});
        }catch(ex){
            return res.json({success:false,message:ex});
        }
    },
    removeFromCart:async function(req,res){
        try{
            const {user,product}=req.body;
            const updatedCart=await cartModel.findOneAndUpdate({user:user},{$pull:{items:{product:product}}},{new:true});
            return res.json({succcess:true,data:updatedCart,message:"Product remoed from cart"});
        }catch(ex){
            return res.json({success:false,message:ex});
        }
    }
};
module.exports=cartController;