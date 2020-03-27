<template>
  <div class="he">
      <router-link  tag="li" to='/home' >
    <img src="../../../assets/箭头.png" alt="">
      </router-link>
      <div class="sear">
          <i class="iconfont icon-sousuo"></i>
           <input type="text" ref="inp"  v-model="inputVal" placeholder="请输入搜索关键字">
      </div>
 
     <router-link class="btn" tag="li" to='/search/jiu' @click.native="searchData">搜索</router-link>
      <router-view></router-view>
    
  </div>
</template>
<script>
import Vue from "vue";
import {getjiu} from "../../../api/searchaxios.js";
import { Button } from "mint-ui";

Vue.component(Button.name, Button);

export default {
  data() {
    return {
      con:[],
      searval:'',
      inputVal: ''
    };
  },
 
  methods:{
     async searchData(){  
         this.con=await getjiu(this.inputVal); 
         this.$store.commit("sub",this.con); 
        this.$store.commit("add",this.inputVal); 
        
      }
  },
  components:{

  }
};
</script>
<style lang="less" scoped>
.he {
  width: 100%;
  height: 88px;
  display: flex;
  background-color: white;
  img {
    width: 34px;
    height: 34px;
    padding: 26px 20px;
  }
  .sear{
        border: 1px solid black;
         margin:10px 10px;
        border-radius: 10px; 
        width: 276*2px;
        height: 66px;
        i{
            font-size: 32px
        }
      input{
        width: 480px;
         height: 50px;
         margin:10px 10px;
      }
  }
  .btn{
      border: 1px solid black;
      width: 80px;
      height: 66px;
      line-height: 66px;
      border-radius: 10px; 
      text-align: center;
      margin:10px 10px;
      background-color: gainsboro;
  }
  
}
</style>