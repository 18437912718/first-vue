<template>
  <div class="cen-two">
    <div class="two-top">
      <a   class="top-a">
        <h3>
          <i class="iconfont icon-qianbao-copy"></i>
          <span>我的财产</span>
        </h3>
        <h5>
          <span>查看全部财产</span>
          <i class="iconfont icon-pc-you"></i>
        </h5>
      </a>
    </div>
    <div class="two-buttom">
      <ul>
        <li>
          <a  >
            <i class="iconfont icon-cunkuan" style="display:block;margin-top:5px;"></i>
            <p>预存款</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-chongzhiqia" style="display:block;margin-top:5px;"></i>
            <p>充值卡</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-wodedaijinquan" style="display:block;margin-top:5px;"></i>
            <p>代金券</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-hongbao" style="display:block;margin-top:5px;"></i>
            <p>红包</p>
          </a>
        </li>
        <li>
          <a  >
            <i class="iconfont icon-jifen" style="display:block;margin-top:5px;"></i>
            <p>积分</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cen-two {
  margin-top: 20px;
  width: 100%;
  height: 180px;
  background-color: #fff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  padding-top: 5px;
  padding-bottom: 10px;
}
.two-top {
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
  padding-left: 12px;
  .icon-qianbao-copy {
    font-size: 30px;
    color: skyblue;
  }
  span {
    font-size: 30px;
    margin-left: 16px;
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

.two-buttom {
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