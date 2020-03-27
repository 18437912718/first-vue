<template>
  <div class="tou">
    <ul>
       <router-link tag="li" to="/search/jiu" @click.native="isShow=!isShow;jin(0,true)" :class="{redclass:mouseindex==0}">
        综合排序
        <i class="iconfont icon-arrow"></i>  
         </router-link>
        <dl class="list" v-if="isShow">
          <dt @click="zohe();jin(0,false)" :class="{redclass:mouseindex==0}">综合排序 </dt>
          <dt @click="jin(1,true)"  :class="{redclass:mouseindex==1}">价格从高到低</dt>
          <dt @click="jin(2,true)"  :class="{redclass:mouseindex==2}">价格从低到高</dt>
        </dl>
   
      <router-link tag="li" to="/search/jiu" @click.native="searchData();jin(4,false)" :class="{redclass:mouseindex==4}" >销量</router-link>
      <router-view></router-view>
      <router-link tag="li" to="/search/jiu/result" >筛选</router-link>
    </ul>
  </div>
</template>
<script>
import { getjiu } from "../../../api/searchaxios.js";
import {mapState} from "vuex";
export default {
  data(){
    return{
      isShow:false,
      mouseindex:0,

    }
  },
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      "cone"
    ])
  },
  methods: {
    async searchData() {
      this.searval = this.cone+"销";
     this.con = await getjiu(this.searval);
     this.$store.commit("sub",this.con); 
    },
    async zohe() {
      this.searval = this.cone;
     this.con = await getjiu(this.searval);
     this.$store.commit("sub",this.con); 
    },
   jin(index,boo){
     this.mouseindex=index;
     if(!boo){
       this.isShow=false;
     }
   },
  
  }
};
</script>
<style lang="less" scoped>
.tou {
  position: absolute;
  left: 0;
  top: 88px;
  z-index: 99;
  width: 750px;
  height: 80px;
  background-color: #fff;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;

  font-size: 30px;
  font-weight: 800;
  color: #666;
  ul {
    display: flex;
    li {
      height: 79px;
      flex: 1;
      text-align: center;
      line-height: 80px;
    }
  }
  .list {
    background-color: white;
    position: absolute;
    top: 80px;
    width: 750px;
    
    dt {
      border-bottom: 1px solid #000;
      height: 100px;
      line-height: 100px;
     padding-left: 30px;
    }
    
  
  }
}
.redclass {
     color: red;
        }
</style>