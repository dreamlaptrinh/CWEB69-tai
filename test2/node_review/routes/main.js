const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    res.render('main', null);

});

module.exports = router;