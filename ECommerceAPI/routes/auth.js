const crypto =require("crypto-js");
const router=require("express").Router();
const User=require("../models/User");
router.post("/register",async (req,res)=>{
    let encrpytedPassword=crypto.SHA256(req.body.password).toString();
    const newUser=User({
        username:req.body.username,
        email:req.body.email,
        password:encrpytedPassword
    });
    try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})
router.post("/login",async (req,res)=>{
    try{
    let user=await User.findOne({username:req.body.username});
    if(!user){
        res.status(401).json("Username not found!");
    }
    //console.log(user);
    if(user.password!=crypto.SHA256(req.body.password).toString()){
        res.status(401).json("Wrong Credentials!");
    }
    let {password,...others}=user._doc;
    res.status(200).json(others);
}
catch(err){
    console.log(err);
    res.status(500).json(err);
}

})
module.exports=router;