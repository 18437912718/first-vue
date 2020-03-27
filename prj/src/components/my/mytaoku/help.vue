<template>
      <div class="log_on">
    <router-link tag="li" to="/my">
      <img class="hui" src="../../../assets/箭头.png" alt />
      <span class="myding">帮助中心</span>
    </router-link>
    <div class="xian"></div>
    <div class="ao">
    <router-view></router-view>
    <router-link tag="li" to=/log class="top"> 会员登录</router-link>
    <p class="top">找回密码</p> 
    <router-view></router-view>
    <router-link tag="li" to=/log/sign class="top"> 会员注册</router-link>
    <router-view></router-view>
    <router-link tag="li" to=/fuwu class="top"> 用户服务协议</router-link>
    <router-view></router-view>
    <router-link tag="li" to=/tonzhi class="top"> 圈子使用通知</router-link>
    </div>
    <div class="footer">
    <div class="foot-one">
    <router-view></router-view>
    <router-link tag="li" to=/my class="top-a">我的商城</router-link>
    <a class="top-a">反馈</a>
    <a class="top-a">返回顶部</a>
      
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
    </div>
</template>
<style lang="less" scoped>
.log_on {
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 1210px;
  background-color: #fafafa8c;
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
.xian{
  width: 100%;
  height: 2px;
  border-bottom: solid 1px black;
}
.ao{
    margin-top: 20px;
    width: 80%;
    height: 400px;
    margin: 0 auto;
}
.top{
    font-size: 34px;
     height: 20%;
     width: 100%;
     line-height: 79px;
     border-bottom: solid 1px #e6e6e6; 
}
.footer {
  width: 100%;
  height: 464px;
  margin-top: 20px;
}
.foot-one {
    margin-top: 100px;
  width: 100%;
  height: 73px;
  background: white;
  display: inline-block;
  border-bottom: solid 1px #eee;
  .top-a {
    display: block;
    float: left;
    width: 33.33%;
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