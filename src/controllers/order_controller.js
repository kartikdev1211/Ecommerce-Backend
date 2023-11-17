const orderModel=require("./../models/order_model");
const orderController={
    creatOrder:async function(req,res){
        try{
            const {user,items}=req.body;
            const newOrder=new orderModel({
                user:user,
                items:items
            });
            await newOrder.save();
            return res.json({success:true,data:newOrder,message:"Order Created"});
        }catch(ex){
            return res.json({success:false,message:ex});
        }
    },
    fetchUserOrders: async function(req,res){
        try{
            const userId=req.params.userId;
            const foundUserOrders=await orderModel.find({
                "user._id":userId
            });
            res.json({success:true,data:foundUserOrders});   
        }catch(ex){
            res.json({success:false,message:exp});
        }
    },
    updateOrderStatus:async function(req,res){
        try{
            const {orderId,status}=req.body;
            const updatedOrders=await orderModel.findOneAndUpdate(
                {_id:orderId},
                {status:status},
                {new:true}
            );
            res.json({success:true,data:updatedOrders});   
        }catch(ex){
            res.json({success:false,message:exp});
        }
    }
};
module.exports=orderController;