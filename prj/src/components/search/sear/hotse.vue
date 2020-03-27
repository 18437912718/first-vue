<template>
  <div class="hotse">
    <h1>热门搜索</h1>
    <router-link tag="li" to="/search/jiu" @click.native="hot('海尔')">
      <mt-button type="default">海尔</mt-button>
    </router-link>
    <router-link tag="li" to="/search/jiu" @click.native="hot('无线充')">
      <mt-button type="default">无线充</mt-button>
    </router-link>
  </div>
</template>
<script>
import Vue from "vue";
import { getjiu } from "../../../api/searchaxios.js";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
export default {
  methods: {
    async hot(item) {
      this.searval = item;
      this.con = await getjiu(this.searval);
      this.$store.commit("add",this.searval); 
      this.$store.commit("sub", this.con);
    }
  }
};
</script>
<style lang="less" scoped>
.hotse {
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  overflow: hidden;
  h1 {
    font-size: 40px;
    margin: 20px 50px;
    font-weight: normal;
  }
  .mint-button {
    height: 70px;
    margin-top: 10px;
    font-size: 28px;
    margin-left: 40px;
    border-radius: 30px;
    float: left;
  }
}
</style>