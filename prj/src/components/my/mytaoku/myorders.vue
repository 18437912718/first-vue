<template>
  <div class="cen-one">
    <div class="one-top">
       <router-view></router-view>
      <router-link tag="li" to=/froms  class="top-a">
       <h3>
          <i class="iconfont icon-dingdan"></i>
          <span>我的订单</span>
        </h3>
        <h5>
          <span>查看全部订单</span>
          <i class="iconfont icon-pc-you"></i>
        </h5>
        </router-link>
    
    </div>
    <div class="one-buttom">
      <ul>
        <li>
          <a  >
            <i class="iconfont icon-qianbao" style="display:block;margin-top:5px;"></i>
            <p>待付款</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-icon-receive" style="display:block;margin-top:5px;"></i>
            <p>待收货</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-songhuohuoche" style="display:block;margin-top:5px;"></i>
            <p>待自提</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-pingjia" style="display:block;margin-top:5px;"></i>
            <p>待评价</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-tuikuan" style="display:block;margin-top:5px;"></i>
            <p>退款/退货</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cen-one {
  margin-top: 20px;
  width: 100%;
  height: 180px;
  background-color: #fff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  padding-top: 5px;
  padding-bottom: 10px;
}
.one-top {
  width: 100%;
  height: 60px;
  border-bottom: solid 1px #eee;
}
.top-a {
  display: block;
  width: 705px;
  height: 40px;
  margin: 0 auto;
  margin-top: 10px;
}
h3 {
  width: 190px;
  float: left;
  .icon-dingdan {
    font-size: 30px;
    color: skyblue;
  }
  span {
    font-size: 30px;
    margin-left: 8px;
    color: black;
  }
}
h5 {
  width: 200px;
  float: right;
  margin-top: 1.5px;
  padding-top: 1px;
  span {
    font-size: 16px;
  }
  .icon-pc-you {
    font-size: 16px;
   
  }
}

.one-buttom {
  width: 100%;
  height: 110px;
}
ul {
  width: 714px;
  height: 112px;
  margin: 0 auto;
  list-style: none;
}
li {
  height: 110px;
  vertical-align: top;
  display: inline-block;
  text-align: center;
  width: 20%;
}
a {
  display: block;
  width: 100%;
  height: 100px;
}
i {
  font-size: 40px;
}
p {
  font-size: 25px;
  color: #888;
}
</style>