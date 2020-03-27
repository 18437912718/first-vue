<template>
  <div class="log_on">
    <router-link tag="li" to="/my">
      <img class="hui" src="../../../assets/箭头.png" alt />
    </router-link>
    <div class="xian"></div>
    <img src="../../../assets/mylogo.png" class="mylogo" />
    <h2>淘&emsp;&emsp;库&emsp;&emsp;欢&emsp;&emsp;迎&emsp;&emsp;您&emsp;&emsp;！</h2>
    <div class="log">
      <div class="xian1"></div>
      <dl class="one">
       <dt> 账 号:</dt>
        <dd><input type="text" placeholder="请输入账号" ></dd>
      </dl>
      <dl class="one">
        <dt>密 码:</dt>
        <dd><input type="password" placeholder="请输入密码"></dd>
      </dl>
      <p class="three">
        <input id="log" type="submit" value="立即登录" />
      </p>
      <p class="four">
        Hi，欢迎来淘库商城
        <br> 
        还不是本站会员？
        <router-view></router-view>
      <router-link tag="li" to=/log/sign class="zhu">马上注册</router-link>
      </p>
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
  background-color: #fafafa;
  .hui {
    width: 34px;
    height: 34px;
    padding: 26px 20px;
  }
}
.xian{
  width: 100%;
  height: 2px;
  border-bottom: solid 1px black;
}
.mylogo {
  margin-top: 40px;
  width: 400px;
  margin-left: 200px;
}
h2 {
  margin-top: 40px;
  font-size: 60px;
  text-align: center;
  margin-left: 30px;
}
.log{
  width: 90%;
  height: 600px;
  margin: 0 auto;
  border:solid 1px #e6e6e6;
  margin-top: 80px;                                                                                                                                                 
}
.xian1{
  width: 100%;
  height: 2px;
  margin-top: 50px;
}

.one {
  background-color:#FFF;
  width: 90%;
  height: 110px;
  border: solid 1px#E6E6E6;
  margin: 0 auto;
  dt {
  font-size: 40px;
  line-height: 110px;
  color:#666;
  width: 144px;
  float: left;
  margin-left: 20px;
  }
  dd{
    width: 400px;
    height: 110px;
    float: left;
 input{
     font-size: 40px;
     line-height: 100px;
     width: 400px;
     height: 110px;
     border: none 0;
     outline:none;
     color: rgb(187, 187, 187);
}
  }
}

.three {
  padding-left:80px;
  margin-top: 50px; 
  input {
    font-size: 32px;
    font-weight: 600;
    color:#FFF;
    background-color:#C81623;
    width: 500px;
    height: 84px;
    border: solid 1px#D91E17;
    border-radius: 3px;
    cursor: pointer;
  }
} 
.four {
  margin-top: 40px;
  padding-left: 40px;
  font-size: 34px;
  .zhu{
    float: right;
    margin-right: 200px;
    color: #D91E17;
  }
} 
</style>