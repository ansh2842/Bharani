var express = require('express');
var router = express.Router();
var navSliderController = require('../Controller/navsliderController')
var productController = require('../Controller/productController')
var categoryController = require('../Controller/categoryController')
var NewarrivalController = require('../Controller/NewarrivalController')

router.get('/getSliderfront',navSliderController.getSliderfront)
router.get('/getProductDetails',productController.getProductDetails)
router.get('/getCategoryDetails',categoryController.getCategoryDetails)
router.get('/getnewarrivalDetails',NewarrivalController.getnewarrivalDetails)



module.exports = router;
