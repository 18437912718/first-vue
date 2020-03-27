<template>
  <div class="login">
    <p>结算购物车中的商品，需先登录商城</p>
    <div class="dz">
      <a href="#">登录</a>
      <a href="#">注册</a>
    </div>
  </div>
</template>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 252px;
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: 100px;
  border-top: solid 1 #eee;
  p {
    width: 100%;
    height: 146px;
    line-height: 146px;
    font-size: 30px;
    color: #ed5564;
    text-align: center;
  }
  .dz {
    display: block;
    text-align: center;
    a {
      vertical-align: top;
      display: inline-block !important;
      height: 1.1rem;
      padding: 0 30px;
      margin: 0 auto;
      font-size: 30px;
      color: #555 !important;
      line-height: 1.1rem;
      text-align: center;
      background-color: #fff;
      border: solid 1px #ccc;
      border-radius: 10px;
      margin-left: 10px;
    }
  }
}
</style>