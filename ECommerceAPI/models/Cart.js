const mongoose = require("mongoose");

const CartSchema=mongoose.Schema({
    userId:{type:String,unique:true,required:true},
    products:[
        {
            productId:{type:Number},
            quantity:{
                type:Number,
                default:1
            }
        }
    ]
},{
    timestamps:true
}
);

module.exports=new mongoose.model("Product",CartSchema);