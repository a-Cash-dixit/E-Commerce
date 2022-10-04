const mongoose = require("mongoose");

const OrderSchema=mongoose.Schema({
    userId:{type:String,unique:true,required:true},
    products:[
        {
            productId:{type:Number},
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
    amount:{type:Number,required:true},
    address:{type:Object},
    status:{type:String,default:"pending"}
},{
    timestamps:true
}
);

module.exports=new mongoose.model("Product",OrderSchema);