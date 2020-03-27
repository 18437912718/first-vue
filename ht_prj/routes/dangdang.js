var express = require('express');
var router = express.Router();

/* GET users listing. */
//轮播
router.get('/banner', function(req, res, next) {
    var arr = [
        "http://img58.ddimg.cn/218070070610928_y.jpg",
        "http://img55.ddimg.cn/85250076995655_y.jpg",
        "http://img62.ddimg.cn/upload_img/00803/1/1242x366-1571039813.jpg",
        "http://img51.ddimg.cn/198970070650541_y.jpg"
    ]
    res.send(arr);
});

router.get('/cateList',function(req,res,next){
    var arr=[
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113407955289.png',
            txt:'全球优选'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113407955289.png',
            txt:'兴农扶贫'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113407955289.png',
            txt:'兴农扶贫'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113730153863.png',      
            txt:'工厂直供'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113870067331.png',
            txt:'淘库好店'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05525029655588000.png',
            txt:'发现好货'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05525033900202042.png',
            txt:'限量抢购'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05591315728041790.png',
            txt:'限时秒杀'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05591315064860042.png',
            txt:'红包活动'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05279588135542058.png',
            txt:'签到有奖'
        }
    ]
    res.send(arr);
});

router.get('/select',function(req,res,next){
    var arr=[
        {   link:'/home/data',
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178186750074442_360.jpg",
            span:"￥599.00",
            p:"￥599.00"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190191362359603_360.jpg",
            span:"￥158.00",
            p:"￥158.00",
            link:""
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/28/28_05689932713141776_360.jpg",
            span:"￥19.90",
            p:"￥29.80",
            link:""
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190194126181579_360.jpg",
            span:"￥228.00",
            p:"￥228.00",
            link:""
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190188215112436_360.png",
            span:"￥354.00",
            p:"￥412.00",
            link:""
        }
    ]
    res.send(arr)
});

router.get('/brand',function(req,res,next){
    var arr=[
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg",
            span:'莱蔻玫瑰混酿红葡萄酒（红玫瑰） 单支 全国',
            p:"￥98.00"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190209889373940_360.jpg",
            span:'雷司令半甜白葡萄酒 单支 全国',
            p:"￥188.00"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190182832266521_360.jpg",
            span:'法国波尔多AOP二管轮干红葡萄酒 单支 全国',
            p:"￥354.00"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190046237849095_360.jpg",
            span:'爱纳多桃红葡萄半干起泡酒 单支 全国',
            p:"￥78.00"
        }
    ]
    res.send(arr)
});

router.get('/shopper',function(req,res,next){
    var arr=[
        [
            
                {
                    img:"https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227661965526100.jpg"
                },
            [
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06173033747220649_360.png",
                    span:"盛世zeepower远程距离20mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米",
                    p:"￥186.00"
                },
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06223157182942917_360.jpg",
                    span:"ZeePower远程距离隔空隐藏形15mm无线充电器板苹果xr耳机华为小米",
                    p:"￥119.00"
                },
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06153755886412998_360.png",
                    span:"盛世zeepower远程距离45mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米",
                    p:"￥268.00"
                },
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06222972668101824_360.jpg",
                    span:"ZeePower远距离30mm隔空无线快充隐藏式远程充电器苹果三星小米华为",
                    p:"￥268.00"
                }
            ]
        ],
        [
            {
                img:"https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227661965526100.jpg"
            },
            [
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06173033747220649_360.png",
                    span:"盛世zeepower远程距离20mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米",
                    p:"￥186.00"
                },
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06223157182942917_360.jpg",
                    span:"ZeePower远程距离隔空隐藏形15mm无线充电器板苹果xr耳机华为小米",
                    p:"￥119.00"
                },
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06153755886412998_360.png",
                    span:"盛世zeepower远程距离45mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米",
                    p:"￥268.00"
                },
                {
                    img:"https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06222972668101824_360.jpg",
                    span:"ZeePower远距离30mm隔空无线快充隐藏式远程充电器苹果三星小米华为",
                    p:"￥268.00"
                }
            ]
        ]
    ]
    res.send(arr)
});

router.get('/data-banner', function(req, res, next) {
    var arr = [
        "https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178186750074442_1280.jpg",
        "https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178188978992718_1280.jpg",
        "https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178189001206792_1280.jpg",
        "https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178189032578009_1280.jpg",
        'https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178189069033336_1280.jpg'
    ]
    res.send(arr);
});


module.exports = router;
