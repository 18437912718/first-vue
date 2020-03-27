<template>
  <div class="footer">
    <div class="foot-one">
      <a  >登录</a>
      <a  >注册</a>
      <a  >反馈</a>
      <a  >返回顶部</a>
    </div>
    <div class="foot-two">
      <p>
        <a  >
          <img src="../../../assets/xiazaiyoujiang.png" alt />
          <span style="margin-top: 5px;">下载有奖</span>
        </a>
      </p>

      <p>
        <a  >
          <img src="../../../assets/iphone.png" alt />
          <span style="margin-top: 5px; color: #000000;">触屏版</span>
        </a>
      </p>
      <p>
        <a  >
          <img src="../../../assets/mac.png" alt />
          <span style="margin-top: 5px;">电脑版</span>
        </a>
      </p>
    </div>
    <div class="foot-three">
      <p>Copyright © 2019 淘库商城股份有限公司</p>
    </div>
    <div class="foot-four">
      <p>保留版权及所有权利</p>
    </div>
    <div class="foot-five"></div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 464px;
  margin-top: 20px;
}
.foot-one {
  width: 100%;
  height: 73px;
  background: white;
  display: inline-block;
  border-bottom: solid 1px #eee;
  a {
    display: block;
    float: left;
    width: 25%;
    height: 73px;
    text-align: center;
    line-height: 73px;
    color: #555555;
  }
}
.foot-two {
  width: 100%;
  height: 106px;
  display: inline-block;
  border-bottom: solid 0.05rem #e5e5e5;
  p {
    width: 33.33%;
    height: 96px;
    font-size: 0;
    text-align: center;
    float: left;
    a {
      display: block;
      height: 96px;
      img {
        width: 48px;
        height: 48px;
        display: inline-block;
      }
      span {
        color: #999;
        font-size: 16px;
        display: block;
        margin-top: 10xp;
      }
    }
  }
}
.foot-three {
  width: 100%;
  height: 64px;
  text-align: center;
  line-height: 64px;
}
.foot-four {
  width: 100%;
  height: 64px;
  background: white;
  text-align: center;
  line-height: 64px;
}
.foot-five {
  width: 100%;
  height: 64px;
  background: white;
}
</style>