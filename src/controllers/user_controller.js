const userModel = require("../models/user_model");
const bcrypt=require("bcrypt");
const userController={
    createAccount:async function(req,res){
        try{    
            const userData=req.body;
            const newUser=new userModel(userData);
            await newUser.save();
            return res.json({success:true,data:newUser,message:"User Created"});
        }catch(ex){
            return res.json({success:false,message:ex});
        }
    },
    signIn:async function(req,res){
        try{
            const {email,password}=req.body;
            const foundUser=await userModel.findOne({email:email});
            if(!foundUser){
                return res.json({success:false,message:"User not found"});
            }
            const passwordMatch= bcrypt.compareSync(password,foundUser.password);
            if(!passwordMatch){
                return res.json({success:false,message:"Incorrect Password"});
            }
            return res.json({success:true,data:foundUser});
        }catch(ex){
            return res.json({success:false,message:ex});
        }
    },
    updateUser:async function(req,res){
        try {
            const userId=req.params.id;
            const updateData=req.body; 
            const updatedUser=await userModel.findOneAndUpdate(
                {_id:userId},
                updateData,
                {new:true},
            );  
            if(!updatedUser){
                throw "User not found";
            }   
            return res.json({success:true,data:updatedUser,message:"User updated!"});
        } catch (error) {
            return res.json({success:false,message:error});
        }
    }
};
module.exports=userController;