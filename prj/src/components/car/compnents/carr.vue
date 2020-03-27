<template>
  <div class="tou">
    <div class="touz">
      <router-link  tag="li" to='/home' >
          <img class="huii" src="../../../assets/箭头.png" alt="">
      </router-link>
    </div>
    <div class="touzh">
      <h1>购物车</h1>
    </div>
    <div class="touy" @click="cd()">
      <!-- <a href="#"> -->
      <i class="iconfont icon-caidan"></i>
      <!-- </a> -->
    </div>
    <navs class="n"></navs>
  </div>
</template>

<style lang="less" scoped>
.tou {
  background: rgba(248, 248, 248, 0.95);
  width: 100%;
  height: 88px;
  display: flex;
  position: relative;
 
}
.touz {
  float: left;
  //   display: block;
  width: 88px;
  height: 88px;
  .huii{
    position: absolute;
    left: 0;
    top: 0px;
     width: 34px;
    height: 34px;
    padding: 26px 20px;
    }
}
.touz a {
  // display: block;
  width: 86px;
  height: 86px;
}
.icon-changyongtubiao-xianxingdaochu-zhuanqu- {
  font-size: 45px;
  line-height: 86px;
  margin-left: 15px;
}
.touzh {
  display: flex;
  flex: 1;
  line-height: 86px;
  width: 106px;
  height: 86px;
  align-items: center;
  justify-content: center;
}
.touzh h1 {
  // flex: 1;
  font-size: 35px;
  font-weight: 550;
}
.touy {
  float: right;
  width: 86px;
  height: 86px;
}
.touy a {
  display: block;
  width: 100%;
  height: 100%;
}
.icon-caidan {
  font-size: 45px;
  line-height: 86px;
  color: #969696;
}
.n {
  position: absolute;
  right: 0;
  display: none;
}
</style>
<script>
import navs from "./nav.vue";
export default {
  components: {
    navs
  },
  methods: {
    cd() {
      var k = document.querySelector(".n");
      if(k.style.display=='none'){
          k.style.display = "block"
      }else{
        k.style.display = "none"
      }
        
    }
  },
  mounted() {}
};
</script>
