const mongoose = require("mongoose");

const ProductSchema=mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String},
    categories:{type:Array},
    size:{type:Number},
    color:{type:String},
    price:{type:Number,required:true}
},
    {
        timestamps:true
    }
);

module.exports=new mongoose.model("Product",ProductSchema);