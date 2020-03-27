<template>
  <div class="froms_on">
    <router-link tag="li" to="/my">
      <img class="hui" src="../../../assets/箭头.png" alt />
      <span class="myding">我的订单</span>
    </router-link>
    <div class="xian"></div>
    <div class="shou">
      <input type="text" placeholder="输入商品标题或订单号进行搜索" />
      <img src="../../../assets/搜索--1.png" alt />
    </div>
    <div class="bon">
      <div class="cen">
        <div class="i-i">
          <i></i>
        </div>
        <p class="one">您还没有相关的订单</p>
        <p class="two">可以去看看哪些想要买的</p>
         <router-view></router-view>
      <router-link tag="li" to=/home class="but">随便逛逛</router-link>
        
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.froms_on {
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 1210px;
  background-color: white;
  position: relative;
  .hui {
    width: 34px;
    height: 34px;
    padding: 26px 20px;
  }
  .myding {
    font-size: 34px;
    position: absolute;
    left: 310px;
    top: 15px;
  }
}
.xian {
  width: 100%;
  height: 2px;
  border-bottom: solid 1px #e6e6e6;
}
.shou {
  width: 100%;
  border-bottom: solid 1px #e6e6e6;
  height: 80px;
  input {
    width: 80%;
    height: 70px;
    border: none 0;
    outline: none;
    color: rgb(160, 155, 155);
    background-color: #eee;
    line-height: 70px;
    padding-left: 10px;
    margin-top: 5px;
    border-radius: 0.2rem;
  }
  img {
    width: 40px;
    height: 40px;
    float: right;
    margin-top: 20px;
    margin-right: 60px;
  }
}
.bon {
  width: 100%;
  height: 800px;
  position: relative;
}
.cen {
  width: 500px;
  height: 500px;
  position: absolute;
  left: 120px;
  top: 300px;
}
.i-i {
  display: inline-block;
  width: 130px;
  height: 130px;
  margin: 0 auto;
  background-color: #ddd;
  border-radius: 100%;
  position: absolute;
  top: 80px;
  left: 185px;

}
i {
  background-image: url("../../../assets/order_w.png");
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
}
.one{
    font-size: 36px;
    position: absolute;
    left:90px;
    top: 240px;
}
.two{
    font-size: 36px;
    position: absolute;
    left:60px;
    top: 310px;
}
.but{
     font-size: 36px;
    position: absolute;
    left:170px;
    top: 380px;
    border:solid 1px #ddd;
}
</style>