var express = require('express');
var router = express.Router();

/* GET users listing. */
// 分类滑动列表开始
router.get('/sort', function (req, res, next) {
    var arr = [
        {
            id: 1,
            title: "品牌推荐"
        },
        {
            id: 2,
            title: "家用电器"
        },
        {
            id: 3,
            title: "手机数码"
        },
        {
            id: 4,
            title: "电脑办公"
        },
        {
            id: 2,
            title: "美妆护肤"
        },
        {
            id: 3,
            title: "女装/内衣"
        },
        {
            id: 2,
            title: "男装/户外"
        },
        {
            id: 3,
            title: "箱包皮具"
        },
        {
            id: 2,
            title: "珠宝首饰"
        },
        {
            id: 3,
            title: "母婴玩具"
        },
        {
            id: 2,
            title: "食品生鲜"
        },
        {
            id: 3,
            title: "医药保健"
        },
        {
            id: 2,
            title: "家居用品"
        },
        {
            id: 3,
            title: "家居建材"
        },
        {
            id: 2,
            title: "汽车/汽车"
        },
        {
            id: 3,
            title: "进口商品"
        },
        {
            id: 2,
            title: "超市便利"
        },
    ]
    res.send(arr)
});

router.get('/brand', function (req, res, next) {
    var id = req.query.id;
    console.log(id)
    if (id == 2) {
        var arr = [
            {
                title: '家用电器',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-895.jpg",
                        span: "电视"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-896.jpg",
                        span: "空调"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-897.jpg",
                        span: "洗衣机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-898.jpg",
                        span: "热水器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1549.jpg",
                        span: "冰箱"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1595.jpg",
                        span: "电热毯"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1599.jpg",
                        span: "电熨斗"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1645.jpg",
                        span: "取暖器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1648.jpg",
                        span: "除湿机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1665.jpg",
                        span: "冷藏柜"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1618.jpg",
                        span: "其它"
                    },
                ]
            },
            {
                title: '厨房大电',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1642.jpg",
                        span: "三件套"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-905.jpg",
                        span: "烟灶套装"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-906.jpg",
                        span: "油烟机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-907.jpg",
                        span: "燃气灶"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-908.jpg",
                        span: "消毒柜"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-909.jpg",
                        span: "洗碗机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1349.jpg",
                        span: "集成灶"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1466.jpg",
                        span: "其他"
                    },

                ]
            },
            {
                title: '中式厨房',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1350.jpg",
                        span: "电压力锅"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1351.jpg",
                        span: "电磁炉"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-910.jpg",
                        span: "净水器/饮水机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-911.jpg",
                        span: "电饭煲"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-912.jpg",
                        span: "豆浆机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-913.jpg",
                        span: "电热水壶"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1466.jpg",
                        span: "电饼档"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1467.jpg",
                        span: "平底锅"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1468.jpg",
                        span: "电煮锅"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1883.jpg",
                        span: "绞肉机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1884.jpg",
                        span: "小厨宝"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1603.jpg",
                        span: "其他"
                    },

                ]
            },
            {
                title: '西式厨房',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1600.jpg",
                        span: "碎冰杯"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1603.jpg",
                        span: "打蛋器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1607.jpg",
                        span: "料理碗"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1643.jpg",
                        span: "电蒸箱"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1666.jpg",
                        span: "烤肉锅"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1667.jpg",
                        span: "原汁机配件"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1668.jpg",
                        span: "厨师机配件"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1669.jpg",
                        span: "磨豆机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1670.jpg",
                        span: "冰淇淋机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1672.jpg",
                        span: "奶泡机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-914.jpg",
                        span: "烤箱"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-915.jpg",
                        span: "料理机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-916.jpg",
                        span: "微波炉"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-917.jpg",
                        span: "榨汁机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-918.jpg",
                        span: "面包机/面条机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-919.jpg",
                        span: "咖啡机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1466.jpg",
                        span: "其他"
                    },

                ]
            },
            {
                title: '生活电器',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1570.jpg",
                        span: "挂烫机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1571.jpg",
                        span: "吸尘器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1615.jpg",
                        span: "床垫护理"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1616.jpg",
                        span: "清洁布"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1617.jpg",
                        span: "吸尘器配件"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1618.jpg",
                        span: "食谱芯片"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1619.jpg",
                        span: "清洁机配件"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1620.jpg",
                        span: "扫地机器人"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1621.jpg",
                        span: "刮刀棒"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1623.jpg",
                        span: "网锅"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1624.jpg",
                        span: "主锅底座"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1673.jpg",
                        span: "空气净化器配件"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1547.jpg",
                        span: "空气净化器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1466.jpg",
                        span: "其他"
                    },

                ]
            },
            {
                title: '个户健康',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1610.jpg",
                        span: "体重称"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1611.jpg",
                        span: "按摩器械"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1615.jpg",
                        span: "剃须刀"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1616.jpg",
                        span: "电动牙刷"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1617.jpg",
                        span: "电吹风"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1618.jpg",
                        span: "食按摩器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1619.jpg",
                        span: "理发器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1620.jpg",
                        span: "足浴盆"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1621.jpg",
                        span: "足疗机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1623.jpg",
                        span: "按摩椅"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1624.jpg",
                        span: "其他"
                    },

                ]
            },

        ]
    } else if (id == 3) {
        var arr = [
            {
                title: '手机',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-2033.jpg",
                        span: "5G手机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-478.jpg",
                        span: "新品特卖"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-479.jpg",
                        span: "实惠精选"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1613.jpg",
                        span: "手机配件"
                    },

                ]
            },
            {
                title: '智能设备',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-499.jpg",
                        span: "智能手机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-500.jpg",
                        span: "智能手表"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-501.jpg",
                        span: "智能手环"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1294.jpg",
                        span: "VR眼睛"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1295.jpg",
                        span: "智能摄影"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1296.jpg",
                        span: "智能健康"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1813.jpg",
                        span: "智能家居"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-2034.jpg",
                        span: "智能出行"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-2032.jpg",
                        span: "其它"
                    },

                ]
            },
            {
                title: '摄影摄像',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1545.jpg",
                        span: "相机配件"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1572.jpg",
                        span: "清洁套装"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1586.jpg",
                        span: "光学仪器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1676.jpg",
                        span: "耳机耳麦"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-525.jpg",
                        span: "相机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-526.jpg",
                        span: "单反"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-528.jpg",
                        span: "摄像机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1314.jpg",
                        span: "拍立得"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1317.jpg",
                        span: "镜头"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1319.jpg",
                        span: "自拍杆"
                    },

                ]
            },
            {
                title: '硬件存储',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1630.jpg",
                        span: "无线网卡"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-507.jpg",
                        span: "显示器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-508.jpg",
                        span: "机械键盘"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-509.jpg",
                        span: "固体硬盘"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-510.jpg",
                        span: "CPU"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-511.jpg",
                        span: "显卡"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-512.jpg",
                        span: "主板"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-513.jpg",
                        span: "高速U盘"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1313.jpg",
                        span: "路由器"
                    },


                ]
            },

        ]
    } else if (id == 1) {
        var arr = [
            {
                title: "品牌推荐",
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/brand/06177238802113016_small.jpg",
                        span: "雅珂珐瑞"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/brand/06171094704690745_small.jpg",
                        span: "Healbe"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/brand/06171094345436416_small.jpg",
                        span: "迈欧(MIO)"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/brand/06171093941239566_small.jpg",
                        span: "仕博达"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/brand/06153778969357057_small.jpg",
                        span: "zeepower"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/brand/06144459317737549_small.jpg",
                        span: "Xrush牙刷宝"
                    },
                ]
            }
        ]
    } else if (id = 4) {
        var arr = [
            {
                title: '电脑',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-2033.jpg",
                        span: "笔记本"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-478.jpg",
                        span: "平板电脑"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-479.jpg",
                        span: "台式机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1613.jpg",
                        span: "一体机"
                    },

                ]
            },
            {
                title: '电脑配件',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-499.jpg",
                        span: "鼠标"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-500.jpg",
                        span: "键盘"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-501.jpg",
                        span: "鼠标垫"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1294.jpg",
                        span: "主机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1295.jpg",
                        span: "智能摄影"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1296.jpg",
                        span: "智能健康"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1813.jpg",
                        span: "智能家居"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-2034.jpg",
                        span: "智能出行"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-2032.jpg",
                        span: "其它"
                    },

                ]
            },
            {
                title: '办公设备',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1545.jpg",
                        span: "打印机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1572.jpg",
                        span: "点验钞机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1586.jpg",
                        span: "装订机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1676.jpg",
                        span: "考勤机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-525.jpg",
                        span: "投影仪"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-526.jpg",
                        span: "传真机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-528.jpg",
                        span: "复印机"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1314.jpg",
                        span: "扫描仪"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1317.jpg",
                        span: "镜头"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1319.jpg",
                        span: "保险箱"
                    },

                ]
            },
            {
                title: '文具耗材',
                list: [
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1630.jpg",
                        span: "笔类"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-507.jpg",
                        span: "本册便签"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-508.jpg",
                        span: "办公文具"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-509.jpg",
                        span: "文件收纳"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-510.jpg",
                        span: "计算器"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-511.jpg",
                        span: "显卡"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-512.jpg",
                        span: "主板"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-513.jpg",
                        span: "高速U盘"
                    },
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/common/category-pic-1313.jpg",
                        span: "路由器"
                    },


                ]
            },

        ]

    }



    res.send(arr);
});

router.get("/title", function (req, res, next) {
    var arr = [
        { title: "家用电器" },
        { title: "厨房大电" },
        { title: "中式厨房" },
        { title: "西式厨房" },
        { title: "生活电器" },
        { title: "个户健康" },
    ]
});
router.get("/listone", function (req, res, next) {
    var id = req.query.id
    console.log(req.query)
    var arr = []
    if (id == '雅珂珐瑞') {
        arr = [
            
                    {
                        img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06178795317676603_360.jpg",
                        name: "雅珂珐瑞 3D男童女童防水石英图案装饰手表 时尚潮流儿童套装手表",
                        price:"￥118.00",
                        sales:"销量",
                        number:"0",
                        trade:"健康鼠智能手表专营店",
                        
                    },

            ]
    }else if(id=="Healbe"){
        arr=[
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171269383996619_360.jpg",
                name: "美国gobe2健康监测卡路里消耗华表饮水压力睡眠智能心率血压手环",
                price:"￥118.00",
                sales:"销量",
                number:"30",
                trade:"健康鼠智能手表专营店",
            },
        ]
       
    }else if(id="迈欧(MIO)"){
        arr=[
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171244191275991_360.jpg",
                name: "运动星Ⅲ心率表 运动跑步无胸带心率监测 卡路里消耗电子户外手表",
                price:"￥50.00",
                sales:"销量",
                number:"21",
                trade:"健康鼠智能手表专营店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171242079367511_360.jpg",
                name: "新品上市mio迈欧SLICE手环智能运动手环户外心率检测手表PAI",
                price:"￥348.00",
                sales:"销量",
                number:"33",
                trade:"健康鼠智能手表专营店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171313824298266_360.jpg",
                name: "美国MIO迈欧fuse心率表光电监测手环计步游泳运动户外跑步手表",
                price:"395.00",
                sales:"销量",
                number:"23",
                trade:"健康鼠智能手表专营店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171103089293177_360.jpg",
                name: "健步之星(挚尊版)心率表 跑步无胸带男多功能计步 传感器卡路里腕带运动手表",
                price:"￥50.00",
                sales:"销量",
                number:"25",
                trade:"健康鼠智能手表专营店",
            },
        ]

    }else if(id="仕博达"){
        arr=[
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171298429830019_360.jpg",
                name: "手持式户外工作站气压计监测海拔高度计登山装备仪罗盘码表时间闹钟钓鱼表",
                price:"￥200.00",
                sales:"销量",
                number:"29",
                trade:"健康鼠智能手表专营店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171250587892123_360.jpg",
                name: "户外先锋Ⅱ男士多功能户外运动登山手表 海拔高度表气压计指南针防水时间闹钟",
                price:"￥199.00",
                sales:"销量",
                number:"19",
                trade:"健康鼠智能手表专营店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171249269053572_360.jpg",
                name: "户外大师II登山表海拔高度气压罗盘防水户外运动心率表（有胸带）",
                price:"395.00",
                sales:"销量",
                number:"23",
                trade:"健康鼠智能手表专营店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171247422933737_360.jpg",
                name: "户外大师III海拔表高度温度罗盘心率运动户外手表 登山表",
                price:"￥50.00",
                sales:"销量",
                number:"251",
                trade:"健康鼠智能手表专营店",
            },
        ]

    }else if(id="zeepower"){
        arr=[
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/62/62_06240467744426830_360.jpg",
                name: "抖音网红海底捞专用ZeePower远程距离隔空隐藏形式无线充电器板xr苹果11x耳机华为小米 45m",
                price:"￥200.00",
                sales:"销量",
                number:"7",
                trade:"自营",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/62/62_06240179963384901_360.jpg",
                name: "ZeePower远程距离隔空隐藏形 无线充电器板苹果xr耳机华为小米 15mm 黑色 盛世无线充电科",
                price:"￥99.00",
                sales:"销量",
                number:"12",
                trade:"自营",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/74/74_06171249269053572_360.jpg",
                name: "ZeePower远程距离隔空隐藏形15mm无线充电器板苹果xr耳机华为小米",
                price:"295.00",
                sales:"销量",
                number:"4",
                trade:"盛世无线充电工厂店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06223157182942917_360.jpg",
                name: "ZeePower远程距离隔空隐藏形15mm无线充电器板苹果xr耳机华为小米",
                price:"￥119.00",
                sales:"销量",
                number:"13",
                trade:"盛世无线充电工厂店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06222972668101824_360.jpg",
                name: "ZeePower远距离30mm隔空无线快充隐藏式远程充电器苹果三星小米华为",
                price:"￥268.00",
                sales:"销量",
                number:"13",
                trade:"盛世无线充电工厂店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06173033747220649_360.png",
                name: "盛世zeepower远程距离20mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米",
                price:"￥186.00",
                sales:"销量",
                number:"98",
                trade:"盛世无线充电工厂店",
            },
            {
                img: "https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06153755886412998_360.png",
                name: "盛世zeepower远程距离45mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米",
                price:"￥268.00",
                sales:"销量",
                number:"57",
                trade:"盛世无线充电工厂店",
            },
        ]

    }
      
    res.send(arr);

})


module.exports = router;