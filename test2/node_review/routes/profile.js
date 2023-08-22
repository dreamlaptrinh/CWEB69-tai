const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    res.json({user: req.user || 'Không được đăng nhập'});
});

router.get('/logout', function(req, res, next){
    req.logout(function(err){
        if (err) { return next(err); }
        res.json('Người dùng đã đăng xuất');
    });    
});

module.exports = router;