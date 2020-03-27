var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/jiu', function(req, res, next) {
    var id=req.query.id
    console.log(req.query)
    var arr=[]
    if(id=='酒'){
        arr = [
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'莱蔻玫瑰混酿红葡萄酒（红玫瑰） 单支 全国',
                span:"￥95.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190209889373940_360.jpg',
                h4:'雷司令半甜白葡萄酒 单支 全国',
                span:"￥188.00",
                p:'销量15',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190182832266521_360.jpg',
                h4:'法国波尔多AOP二管轮干红葡萄酒 单支 全国',
                span:"￥354.80",
                p:'销量28',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190046237849095_360.jpg',
                h4:'爱纳多桃红葡萄半干起泡酒 单支 全国',
                span:"￥78.80",
                p:'销量74',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'爱纳多桃红葡萄半干起泡酒 单支 全国',
                span:"￥132.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/28/28_05691699688290937_360.jpg',
                h4:'佳洁士(Crest) 健康专家漱口水500ml(长效保护牙龈 防出血 无酒精) 抗牙龈红肿出血 厦门',
                span:"￥32.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190182832266521_360.jpg',
                h4:'法国波尔多AOP二管轮干红葡萄酒 单支 全国',
                span:"￥32.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
        ]
    }else if(id=='酒销'){
        arr = [
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190182832266521_360.jpg',
                h4:'法国波尔多AOP二管轮干红葡萄酒 单支 全国',
                span:"￥354.80",
                p:'销量118',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190209889373940_360.jpg',
                h4:'雷司令半甜白葡萄酒 单支 全国',
                span:"￥188.00",
                p:'销量98',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190046237849095_360.jpg',
                h4:'爱纳多桃红葡萄半干起泡酒 单支 全国',
                span:"￥78.80",
                p:'销量74',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'莱蔻玫瑰混酿红葡萄酒（红玫瑰） 单支 全国',
                span:"￥95.80",
                p:'销量53',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'爱纳多桃红葡萄半干起泡酒 单支 全国',
                span:"￥132.80",
                p:'销量34',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/28/28_05691699688290937_360.jpg',
                h4:'佳洁士(Crest) 健康专家漱口水500ml(长效保护牙龈 防出血 无酒精) 抗牙龈红肿出血 厦门',
                span:"￥32.80",
                p:'销量14',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190182832266521_360.jpg',
                h4:'法国波尔多AOP二管轮干红葡萄酒 单支 全国',
                span:"￥32.80",
                p:'销量11',
                addr:'皇家龙船红酒专卖店'
            },
        ]
    }else if(id=='衣服'){
        arr = [
            { 
                img:'//img.alicdn.com/img/i4/25742813/O1CN01yP31Du1WeOhU4fjT9_!!0-saturn_solar.jpg_210x210.jpg',
                h4:'棉衣男冬装外套潮韩版潮流棉袄2019新款棉服',
                span:"￥388.80",
                p:'销量3780',
                addr:'lilbetter旗舰店'
            },
            { 
                img:'//gw3.alicdn.com/bao/uploaded/i2/556608090/O1CN01uyN3DL29dGjt2USRN_!!0-item_pic.jpg_210x210.jpg',
                h4:'Lilbetter男士卫衣潮牌嘻哈宽松套头衫涂鸦印花秋装衣服帅气上衣',
                span:"￥168.00",
                p:'销量514',
                addr:'lilbetter旗舰店'
            },
            { 
                img:'//gw3.alicdn.com/bao/uploaded/i1/2270438858/O1CN01bfRj6h2FJ0r3EDjxf_!!0-item_pic.jpg_210x210.jpg',
                h4:'男士短袖t恤新款圆领宽松衣服夏季潮流纯棉白半袖丅大码体恤男装',
                span:"￥29.80",
                p:'销量2万+',
                addr:'auooi旗舰店'
            },
            { 
                img:'//gw1.alicdn.com/bao/uploaded/i1/TB1IIzgRVXXXXcOXXXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                h4:'男士长袖t恤秋季青年圆领体恤纯棉打底衫潮流丅恤冬装加绒上衣服',
                span:"￥49",
                p:'销量5万+',
                addr:'装攻略旗舰店'
            },
            { 
                img:'//gw2.alicdn.com/bao/uploaded/i3/3881283140/O1CN0167VQh11Z4ACU3WA8P_!!0-item_pic.jpg_210x210.jpg',
                h4:'秋冬季长袖t恤男士上衣加绒加厚打底衫男装潮流卫衣保暖秋衣服男',
                span:"￥9.80",
                p:'销量10万+',
                addr:'潮男谷旗舰店'
            },
            { 
                img:'//img.alicdn.com/img/i3/15053001/O1CN01ecnXQg1Y2V9bGDueg_!!0-saturn_solar.jpg_210x210.jpg',
                h4:'加绒宽松男卫衣男士卫衣秋冬季连帽加厚外套',
                span:"￥148",
                p:'销量1万+',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'//img.alicdn.com/img/i3/45605153/O1CN01WY9Dbu1nw7UA41CJY_!!0-saturn_solar.jpg_210x210.jpg',
                h4:'2019春秋男士韩版牛仔外套潮潮牌ins夹克男',
                span:"￥108",
                p:'销量5.5万+',
                addr:'tkz旗舰店'
            },
        ]
    }else if(id=='衣服销'){
        arr = [
            { 
                img:'//gw2.alicdn.com/bao/uploaded/i3/3881283140/O1CN0167VQh11Z4ACU3WA8P_!!0-item_pic.jpg_210x210.jpg',
                h4:'秋冬季长袖t恤男士上衣加绒加厚打底衫男装潮流卫衣保暖秋衣服男',
                span:"￥9.90",
                p:'销量10万+',
                addr:'潮男谷旗舰店'
            },
            { 
                img:'//gw3.alicdn.com/bao/uploaded/i3/3081350486/O1CN01wUXekw1FSd2fDXEeX_!!0-item_pic.jpg_210x210.jpg',
                h4:'长袖t恤男士卫衣加绒春秋装上衣服秋衣潮流秋季男装秋冬季打底衫',
                span:"￥49",
                p:'销量9万+',
                addr:'语克旗舰店'
            },
            { 
                img:'//gw2.alicdn.com/bao/uploaded/i3/2981688681/O1CN018z8ndM2DzwnuNmia6_!!0-item_pic.jpg_210x210.jpg',
                h4:'秋季长袖T恤秋衣男士纯棉打底衫体恤内搭白色男装上衣服纯色潮流',
                span:"￥9.90",
                p:'销量8.5万+',
                addr:'veaffor威弗旗舰店'
            },
            { 
                img:'//gw1.alicdn.com/bao/uploaded/i3/3826760664/O1CN01rVm14c1Gm9XbYjoo3_!!0-item_pic.jpg_210x210.jpg',
                h4:'秋冬季长袖T恤男上衣打底衫男装加绒加厚卫衣青年男装保暖秋衣服',
                span:"￥95.80",
                p:'销量7万+',
                addr:'南极人欧驰专卖店'
            },
            { 
                img:'//gw2.alicdn.com/bao/uploaded/i2/1786613187/O1CN01IEyZKI1ZPgpVNHbUu_!!0-item_pic.jpg_210x210.jpg',
                h4:'2件】秋冬季男士长袖t恤男潮流上衣服打底衫秋装上衣男装短袖t恤C',
                span:"￥132.80",
                p:'销量5万+',
                addr:'南极人欧驰专卖店'
            },
            { 
                img:'//gw2.alicdn.com/bao/uploaded/i2/3040873527/O1CN01A0U54l1bvPUTxvj78_!!0-item_pic.jpg_210x210.jpg',
                h4:'jeep男士皮衣外套2019冬季棉服男山羊真皮衣服吉普加厚保暖防寒服',
                span:"￥5280",
                p:'销量14',
                addr:'茜茜海外贸易有限公司'
            },
            { 
                img:'//gw3.alicdn.com/bao/uploaded/i2/2996601221/O1CN010wyRjV1KtGA7upO9L_!!0-item_pic.jpg_210x210.jpg',
                h4:'秋冬季新款毛呢大衣男中长款无羊绒呢子大衣服商务休闲双面妮外套',
                span:"￥5184",
                p:'销量1',
                addr:'茜茜海外贸易有限公司'
            },
        ]
    }else if(id=='无线充'){
        arr = [
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/62/62_06240467744426830_360.jpg',
                h4:'抖音网红海底捞专用ZeePower远程距离隔空隐藏形式无线充电器板xr苹果11x耳机华为小米 45m',
                span:"￥288.80",
                p:'销量5',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/62/62_06240179963384901_360.jpg',
                h4:'ZeePower远程距离隔空隐藏形 无线充电器板苹果xr耳机华为小米 15mm 黑色 盛世无线充电科',
                span:"￥88.00",
                p:'销量12',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06240246822068067_360.jpg',
                h4:'抖音网红海底捞专用ZeePower远程距离隔空隐藏形式无线充电器板xr苹果11x耳机华为小米 45m',
                span:"￥298.80",
                p:'销量2',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06223157182942917_360.jpg',
                h4:'ZeePower远程距离隔空隐藏形15mm无线充电器板苹果xr耳机华为小米',
                span:"￥119",
                p:'销量15',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06222972668101824_360.jpg',
                h4:'ZeePower远距离30mm隔空无线快充隐藏式远程充电器苹果三星小米华为',
                span:"￥268.80",
                p:'销量11',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06173033747220649_360.png',
                h4:'盛世zeepower远程距离20mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米',
                span:"￥186",
                p:'销量97',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06153755886412998_360.png',
                h4:'盛世zeepower远程距离45mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米',
                span:"￥268。00",
                p:'销量56',
                addr:'盛世无线充电工厂店'
            },
        ]
    }else if(id=='无线充销'){
        arr = [
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06173033747220649_360.png',
                h4:'盛世zeepower远程距离20mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米',
                span:"￥186",
                p:'销量97',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06153755886412998_360.png',
                h4:'盛世zeepower远程距离45mm隔空隐藏形式无线充电器xr苹果x快充板安卓华为小米',
                span:"￥268。00",
                p:'销量56',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06223157182942917_360.jpg',
                h4:'ZeePower远程距离隔空隐藏形15mm无线充电器板苹果xr耳机华为小米',
                span:"￥119",
                p:'销量15',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/62/62_06240179963384901_360.jpg',
                h4:'ZeePower远程距离隔空隐藏形 无线充电器板苹果xr耳机华为小米 15mm 黑色 盛世无线充电科',
                span:"￥88.00",
                p:'销量12',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06222972668101824_360.jpg',
                h4:'ZeePower远距离30mm隔空无线快充隐藏式远程充电器苹果三星小米华为',
                span:"￥268.80",
                p:'销量11',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/62/62_06240467744426830_360.jpg',
                h4:'抖音网红海底捞专用ZeePower远程距离隔空隐藏形式无线充电器板xr苹果11x耳机华为小米 45m',
                span:"￥288.80",
                p:'销量5',
                addr:'盛世无线充电工厂店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/70/70_06240246822068067_360.jpg',
                h4:'抖音网红海底捞专用ZeePower远程距离隔空隐藏形式无线充电器板xr苹果11x耳机华为小米 45m',
                span:"￥298.80",
                p:'销量2',
                addr:'盛世无线充电工厂店'
            },
        ]
    }else if(id=='海尔'){
        arr = [
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178186750074442_1280.jpg',
                h4:'海尔吸尘器家用小型手持式强力大吸力功率静音地毯小米粒除螨机',
                span:"￥599.00",
                p:'销量11',
                addr:'邦辰生活家电旗舰店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209892067528319_360.jpg',
                h4:'海尔正品挂烫机家用蒸汽小型迷你手持电熨斗立式大功率烫衣服神器',
                span:"￥499.00",
                p:'销量0',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209888174408452_360.jpg',
                h4:'Haier/海尔 HRC-WFS3021A家用电饭煲智能预约3L迷你正品包邮2-5人',
                span:"￥259.00",
                p:'销量0',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209884358646643_360.jpg',
                h4:'海尔除螨虫神器家用床上吸尘除蝻仪手持小型床铺紫外线杀菌机宿舍',
                span:"￥198.80",
                p:'销量12',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209332845559586_360.jpg',
                h4:'海尔吸尘器家用小型手持式推杆大吸力静音强力大功率吸小狗毛地毯',
                span:"￥199",
                p:'销量18',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06179722935293939_360.jpg',
                h4:'海尔微波炉蒸烤箱一体机家用多功能全自动新款智能平板式正品特价',
                span:"￥798.80",
                p:'销量365',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06179716727357069_360.jpg',
                h4:'海尔微波炉家用小型迷你全自动多功能新款智能平板式正品特价20L',
                span:"￥499",
                p:'销量89',
                addr:'自营'
            },
           
        ]
    }else if(id=='海尔销'){
        arr = [
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06179722935293939_360.jpg',
                h4:'海尔微波炉蒸烤箱一体机家用多功能全自动新款智能平板式正品特价',
                span:"￥798.80",
                p:'销量365',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06179716727357069_360.jpg',
                h4:'海尔微波炉家用小型迷你全自动多功能新款智能平板式正品特价20L',
                span:"￥499",
                p:'销量89',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209332845559586_360.jpg',
                h4:'海尔吸尘器家用小型手持式推杆大吸力静音强力大功率吸小狗毛地毯',
                span:"￥199",
                p:'销量18',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209884358646643_360.jpg',
                h4:'海尔除螨虫神器家用床上吸尘除蝻仪手持小型床铺紫外线杀菌机宿舍',
                span:"￥198.80",
                p:'销量12',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/75/75_06178186750074442_1280.jpg',
                h4:'海尔吸尘器家用小型手持式强力大吸力功率静音地毯小米粒除螨机',
                span:"￥599.00",
                p:'销量11',
                addr:'邦辰生活家电旗舰店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209892067528319_360.jpg',
                h4:'海尔正品挂烫机家用蒸汽小型迷你手持电熨斗立式大功率烫衣服神器',
                span:"￥499.00",
                p:'销量0',
                addr:'自营'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/53/53_06209888174408452_360.jpg',
                h4:'Haier/海尔 HRC-WFS3021A家用电饭煲智能预约3L迷你正品包邮2-5人',
                span:"￥259.00",
                p:'销量0',
                addr:'自营'
            },
        
        ]
    }
    res.send(arr);
});


module.exports = router;