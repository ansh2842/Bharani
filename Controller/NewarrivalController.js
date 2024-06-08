
const handler= require("express-async-handler")
const newArrivalModel = require("../Model/newArrival")

exports.newproductadd=handler(async(req,res)=>{

    const {text,mrp,price,name,category,flavour}=req.body
    const imagePath = req.files.map((file) => file.filename);

    try{
        const product = await newArrivalModel.create({
            image: imagePath,
            text: text,
            mrp:mrp,
            price: price,
            name: name,
            category: category,
            flavour: flavour

        })

        res.json(product)
    }catch(err){
        console.log(err)
    }
})

exports.newgetproduct = handler(async(req,res)=>{

    try{
        const product = await newArrivalModel.find()
        res.json(product)
    }catch(err){
        console.log(err)
    }
})
exports.getnewarrivalDetails = handler(async(req,res)=>{

    try{
        const product = await newArrivalModel.find()
        res.json(product)
    }catch(err){
        console.log(err)
    }
})

exports.editnewgetProdcut = handler(async(req,res)=>{

    const {id} = req.params
    try{
        const product = await newArrivalModel.findById(id)
        res.json(product)
    }catch(err){
        console.log(err)
    }
})

exports.neweditproduct = handler(async(req,res)=>{

   const {text,name,mrp,price,category,flavour} = req.body
    console.log(req.body)
    const {id} = req.params

    try{
        const product = await newArrivalModel.findById(id)
        if (req.files && req.files.length > 0) {
            const imagePath = req.files.map((file) => file.filename);
            product.image = imagePath;
          }

          product.text = text;
          product.name = name;
          product.mrp = mrp;
          product.price = price;
          product.category = category;
          product.flavour = flavour;

          let tosave = await product.save()
          res.json(tosave);
    }catch(err){
        console.log(err);
    }
})

exports.newproductDelete = handler(async(req,res)=>{

    const {id} = req.params
    console.log(id)
    try{
        const product = await newArrivalModel.findByIdAndDelete(id)
        res.json(product)
    }catch(err){
        console.log(err)
    }
})