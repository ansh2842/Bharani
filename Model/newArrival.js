const mongoose = require('mongoose');
const NewproductSchema = new mongoose.Schema({

    image:[{
        type:String,
        required:true,
    },
    ],
    name:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    mrp:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    flavour:{
        type:String,
        required:true,
    }
    
})

const Newproduct = new mongoose.model("Newproduct",NewproductSchema)
module.exports = Newproduct