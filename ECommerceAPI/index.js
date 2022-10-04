const express=require("express");
const app=express();
const mongoose=require("mongoose");
const userRouter=require("./routes/user");
const dotenv=require("dotenv");
const env=dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(
    console.log("DB connected!")).catch(err=>console.log(err));
app.listen(5000,()=>{
    console.log("Hello, The server is running.");
})
app.use("/api/users",userRouter);
