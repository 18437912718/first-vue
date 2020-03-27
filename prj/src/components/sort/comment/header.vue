<template>
  <div id="header">
    <router-link class="myli" tag="li" to="/Home">
      <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
    </router-link>

    <div class="big">
      <img src="../images/big.png" alt />
      <router-link tag="li" to="/search">
      <input placeholder="请输入关键字" type="text" />
      </router-link>
    </div>

    <i @click="isshow=!isshow" class="iconfont icon-caidan"></i>
    <div class="list" v-if="isshow">
      <ul>
        <router-link tag="li" to="/home">
          <b class="iconfont icon-shouye"></b>首页
        </router-link>
        <router-link tag="li" to="/search">
          <b class="iconfont icon-sousuo"></b>搜索
        </router-link>
        <router-link tag="li" to="/sort">
          <b class="iconfont icon-leimupinleifenleileibie"></b>分类
        </router-link>
         <router-link tag="li" to="/log">
          <b class="iconfont icon-xiaoxi"></b>消息
        </router-link>
         <router-link tag="li" to="/car">
          <b class="iconfont icon-gouwuche1"></b>购物车
         </router-link>
        <router-link tag="li" to="/my">
          <b class="iconfont icon-wode"></b>我的商城
        </router-link>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
    data(){
        return{
            isshow:false
        }

    }

};
</script>

<style lang="less" scoped>
#header {
  position: fixed;
  z-index: 99;
  width: 100%;
  background: white;
  padding: 10px 0;
  display: flex;

  .big {
    width: 552px;
    border-radius: 20px;
    display: flex;
    height: 66px;
    align-items: center;
    background: #e8ecf0;
    img {
      width: 44px;
      height: 44px;
    }
    input {
      flex: 1;
      background: transparent;
      width: 330px;
      height: 62px;
    }
  }
  .myli {
    width: 86px;
    height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      font-size: 35px;
    }
  }

  i {
    width: 85px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 42px;
  }
}
.list {
  position: absolute;
  right: 0px;
  top: 106px;
  background: rgba(85, 85, 85, 0.95);
  width: 220px;
  border-radius: 0.2rem;
  ul {
    li {
        
      width: 200px;
      height: 88px;
      line-height: 88px;
      border-bottom: 1px soild #969696;
      font-size: 30px;
      color: #fff;
      b {
        margin: 0px 20px;
        
      }
    }
  }
}
</style>
