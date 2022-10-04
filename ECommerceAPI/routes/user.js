const router=require("express").Router();
router.get("/getuser",(req,res)=>{
    res.send("You got the user successfully!");
})
router.post("/postuser",(req,res)=>{
    const username=req.body.username;
    res.send("Your name is:"+username);
})
module.exports=router;