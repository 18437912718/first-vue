<template>
  <div class="result">
    <div class="tou">
      <router-link tag="li" to="/search/jiu">
        <img src="../../../assets/箭头.png" alt />
      </router-link>
      <h1>商品筛选</h1>
      <h2 class="sumbit">重置</h2>
    </div>
    <div class="jiage">
      <h1>价格区间</h1>
      <input type="text" placeholder="最低价" />
      <span>---</span>
      <input type="text" placeholder="最高价" />
    </div>
    <div class="space">
      <h1>商品所在地</h1>
      <i class="iconfont icon-shouye-dianji"></i>
      <select name id>
        <option value>不限</option>
        <option value>郑州</option>
        <option value>上海</option>
        <option value>洛阳</option>
        <option value>许昌</option>
      </select>
    </div>
    <div class="kind">
      <h1>商品类型</h1>
      <mt-button type="default" :class="{redclass:isShow}" @click="change()">赠品</mt-button>
      <mt-button type="default"  :class="{redclass:isShow1}" @click="change1()">团购</mt-button>
      <mt-button type="default"  :class="{redclass:isShow2}" @click="change2()">限时折扣</mt-button>
      <mt-button type="default"  :class="{redclass:isShow3}" @click="change3()">虚拟</mt-button>
    </div>
       <div class="dian">
      <h1>店铺类型</h1>
      <mt-button type="default"  :class="{redclass:isShow4}" @click="change4()">平台自营</mt-button>
    </div>
    <router-link  tag="li" to='/search/jiu' >
     <mt-button class="big" type="danger">筛选商品</mt-button>
      </router-link>
  </div>
</template>
<script>
import Vue from "vue";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
export default {
  data(){
    return{
      isShow:false,
      isShow1:false,
      isShow2:false,
      isShow3:false,
      isShow4:false,
    }
  },
  methods:{
    change(){
      if(this.isShow==true){
        this.isShow=false;
      }else{
        this.isShow=true;
      }
    },
    change1(){
      if(this.isShow1==true){
        this.isShow1=false;
      }else{
        this.isShow1=true;
      }
    },
    change2(){
      if(this.isShow2==true){
        this.isShow2=false;
      }else{
        this.isShow2=true;
      }
    },
    change3(){
      if(this.isShow3==true){
        this.isShow3=false;
      }else{
        this.isShow3=true;
      }
    },
    change4(){
      if(this.isShow4==true){
        this.isShow4=false;
      }else{
        this.isShow4=true;
      }
    },
  }
};
</script>
<style lang="less" scoped>
.result {
  position: absolute;
  left: 0;
  top: -88px;
  width: 100%;
  height: 1334px;
  background-color: white;
  .tou {
    display: flex;
    width: 100%;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #bebcbc;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 34px;
      height: 34px;
      padding: 30px 20px;
    }
    h1 {
      margin-left: 280px;
      font-size: 40px;
    }
    .sumbit {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 60px;
      color: red;
    }
  }
  .jiage {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #bebcbc;
    h1 {
      margin-left: 20px;
      margin-top: 10px;
      margin-bottom: 40px;
      color: gray;
    }
    input {
      border: 1px solid #bebcbc;
      width: 200px;
      height: 60px;
      border-radius: 50px;
      margin: 0 10px;
      text-align: center;
      font-size: 30px;
    }
  }
  .space {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #bebcbc;
    h1 {
      margin-left: 20px;
      margin-top: 10px;
      margin-bottom: 40px;
      color: gray;
    }
    select {
      border: 1px solid #bebcbc;
      width: 200px;
      height: 60px;
      border-radius: 50px;
      margin: 0 10px;
      padding-left: 50px;
      font-size: 30px;
    }
    i {
      position: absolute;
      left: 140px;
      top: 414px;
      font-size: 30px;
    }
  }
  .kind{
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #bebcbc;
    h1 {
      margin-left: 20px;
      margin-top: 10px;
      margin-bottom: 40px;
      color: gray;
    }
    button{
      width: 110px;
      height: 60px;
      margin-left: 20px;
    }
  }
  .dian{
      width: 100%;
    height: 200px;
    border-bottom: 1px solid #bebcbc;
    h1 {
      margin-left: 20px;
      margin-top: 10px;
      margin-bottom: 40px;
      color: gray;
    }
    button{
      width: 110px;
      height: 60px;
      margin-left: 20px;
    }
  }
  .big{
    width: 600px;
    height: 88px;
    margin-top: 100px;
    margin-left: 70px;
    font-size: 40px;
  }
}
.redclass {
      background: red;
        }


</style>