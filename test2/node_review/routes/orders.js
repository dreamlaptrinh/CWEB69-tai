const express = require('express');
const router = express.Router();
const Orders = require("../models/oder");

router.get('/', function (req, res, next){
    Orders.find(null)
    .then(function(orders) {
        res.json({data: orders});
    })
    .catch(function(err){
        res.json({error: err.message});
    })
});

router.get('/add', function (req, res, next){
    const query = req.query;
    Orders.create(query)
    .then(function(orders){
        res.json({
            mess: "Thêm sản phẩm thành công",
            data: orders
        })
    })
    .catch(function(err){
        res.json({error: err.message});
    })
});

router.get('/update/:id', function (req, res, next){
    const query = req.query;
    const orderID = req.params.id;

    Orders.findByIdAndUpdate(orderID, query, {new: true})
    .then(function(orders){
        res.json({
            mess: "Cập nhập sản phẩm thành công",
            data: orders
        })
    })
    .catch(function(err){
        res.json({error: err.message});
    })
});

module.exports = router;