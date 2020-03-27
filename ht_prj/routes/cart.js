var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sbg', function(req, res, next) {
    var arr=[
        { 
            img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
            p:'莱蔻玫瑰混酿红葡萄酒（红玫瑰） 单支 全国',
            h2:"￥95.80",
        },
       
    ]
  res.send(arr);
});

module.exports = router;
