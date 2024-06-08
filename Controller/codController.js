const asynchandler = require('express-async-handler')
const Order = require('../Model/orderModel');

exports.orders= asynchandler(async(req,res)=>{

    const {
        firstname,
        lastname,
        email,
        Phone,
        pincode,
        state,
        address,
        city,
        appartment,
        companyname,
        shippingDetails,
        cart,
        Amount
    } = req.body;

    const Unique = `${new Date().getTime()}`;

    try{
        let parsedCart;
        if (typeof cart === 'string') {
            parsedCart = JSON.parse(cart);
        } else {
            parsedCart = cart;
        }

        const orders = await Order.create({
            firstname: firstname,
                lastname: lastname,
                email: email,
                Phone: Phone,
                pincode: pincode,
                state: state,
                address: address,
                city: city,
                appartment: appartment,
                companyname: companyname,
                shippingDetails: shippingDetails,
                country: "India",
                orderId: Unique,
                product: parsedCart,
                Amount: Amount,
                orderType:"Cash on delivery",
                orderStatus: "Success"
        })
        res.json(orders)
    }catch (err){
        console.log(err)
    }
   
})