<template>
  <div class="hotse">
    <h1>历史记录</h1>

    <router-link
      tag="li"
      to="/search/jiu"
      v-for="(item,index) in count"
      :key="index"
      @click.native="song(item)"
    >
      <mt-button type="default">{{item}}</mt-button>
    </router-link>
    <button class="btn" @click="clear()">清除历史记录</button>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import { getjiu } from "../../../api/searchaxios.js";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);

export default {
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      "count"
    ])
  },
  methods: {
    async song(item) {
      this.searval = item;
      this.con = await getjiu(this.searval);
      this.$store.commit("sub", this.con);
    },
    clear(){
        
        this.$store.commit("clear");
    }
  }
};
</script>
<style lang="less" scoped>
.hotse {
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  overflow: hidden;
  h1 {
    font-size: 30px;
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
  .btn {
    position: absolute;
    left: 280px;
    top: 500px;
  }
}
</style>