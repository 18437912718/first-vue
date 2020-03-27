<template>
  <div class="gwc">
    <div class="g-img">
      <i class="iconfont icon-gouwuche"></i>
    </div>
    <p class="kong">您的购物车还是空的</p>
    <p class="tiao">去挑一些中意的商品吧</p>
    <router-view></router-view>
    <router-link tag="li" to="/car/sbgg" class="gg"><span>随便逛逛</span></router-link>
  </div>
</template>
<style lang="less" scoped>
.gwc {
  display: flex;
  margin: 0 auto;
  width: 500px;
  height: 1000px;
  font-size: 35px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .g-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: #777777;
    line-height: 110px;
    i {
      font-size: 70px;
      color: #fff;
      text-align: center;
      margin-left: 15px;
    }
  }
  .tiao {
    font-size: 25px;
  }
  .gg {
    display: block;
    width: 150x;
    height: 50px;
    border: 1px solid #777777;
    margin-top: 10px;
    span {
      font-size: 30px;
      color: #000000;
    }
  }
}
</style>