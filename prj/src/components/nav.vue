<template>
  <div class="nav">
    <router-link tag="li" to="/Home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link tag="li" to="/sort">
     <i class="iconfont icon-leimupinleifenleileibie"></i>
      <span>分类</span>
    </router-link>
    <router-link tag="li" to="/search">
     <i class="iconfont icon-sousuo"></i>
      <span>搜索</span>
    </router-link>
    <router-link tag="li" to="/car">
    <i class="iconfont icon-gouwuche1"></i>
      <span>购物车</span>
    </router-link>
    <router-link tag="li" to="/My">
    <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>
<style lang="less" scoped>
.nav {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
 background-color: #fff;
}
.nav li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    /* height: 50px;
    line-height: 50px;
    text-align: center; */
    i{
        font-size: 50px
    }
  
}
.router-link-active{
    color: red
}
</style>