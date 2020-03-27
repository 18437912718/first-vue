<template>
  <div class="bottom">
    <div class="kf">
      <img src="./images/客服.png" alt />
      <p>客服</p>
    </div>
    <!-- <div class="gw"> -->
      <router-link to='/car' tag='div' class="gw">
      <img src="./images/购物车.png" alt />
      <p>购物车</p>
      </router-link>
    <!-- </div> -->
    <div class="jr">立即购买</div>
    <div class="gm">加入购物车</div>
  </div>
</template>
<style lang="less" scoped>
.bottom {
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 88px;
  background: #fff;
  .kf {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 116px;
  }
  .gw {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 146px;
  }
  .jr {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 88px;
    font-size: 32px;
    color: #fff;
    background: sandybrown
  }
  .gm {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 299px;
    height: 88px;
    font-size: 32px;
    color: #fff;
    background: tomato
  }
  img {
    height: 40px;
    width: 40px;
  }
}
</style>