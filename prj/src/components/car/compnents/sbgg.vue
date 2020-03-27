<template>
  <div class="menu">
    <div v-if="isShow">
    <div class="shang">
      <input class="inp" type="checkbox" checked />
      <h1>皇家龙船红酒专卖店</h1>
    </div>
    <ul>
      <li v-for="(item,index) in sbg" :key="index">
        <input class="ip" type="checkbox" checked />
        <span class="jpg">
          <img :src="item.img" alt />
        </span>
        <p>{{item.p}}</p>
        <h2>{{item.h2}}</h2>
        <div class="cross" @click="isShow=!isShow">
          <a href="javascript:void(0)">删除</a>
        </div>
        <div class="you">
          <span class="you-1">
            <a href="javascript:void(0)">-</a>
          </span>
          <span class="you-2">
            <input type="text" value="1" />
          </span>
          <span class="you-3">
            <a href="javascript:void(0)">+</a>
          </span>
        </div>
      </li>
    </ul>
    </div>
    <carlogin></carlogin>
    <router-link tag="li" to="/car">
      <img class="hui" src="../../../assets/箭头.png" alt />
    </router-link>
  </div>
</template>
<script>
import { getSbg } from "../../../api/car.js";
import carlogin from "./carlogin.vue";
export default {
  components: {
    carlogin
  },
  data() {
    return {
      sbg: [],
      isShow:true
    };
  },
  async created() {
    // console.log("1111")
    // 进行ajax请求
    this.sbg = await getSbg();
  }
};
</script>
<style lang="less" scoped>
.menu {
  // overflow-y: auto;
  position: absolute;
  left: 0;
  top: 88px;
  background-color: white;
  width: 100%;
  height: 1000px;
  z-index: 9;
  .hui {
    position: absolute;
    left: 0;
    top: -88px;
    width: 34px;
    height: 34px;
    padding: 26px 20px;
  }
  .shang {
    width: 100%;
    height: 88px;
    line-height: 88px;
    border-bottom: 1px solid #7777;
    .inp {
      float: left;
      border-color: #ed5564;
      background-color: #ed5564;
      position: relative;
      width: 36px;
      height: 36px;
      border: 1px solid #ccc;
      border-radius: 50%;
      vertical-align: middle;
      margin-top: 20px;
      margin-left: 20px;
    }
    h1 {
      font-size: 30px;
      float: left;
      margin-left: 20px;
    }
  }
  ul {
    width: 100%;
    height: 188px;
    background-color: #fff;
    border-bottom: solid 0.05rem #eee;
    list-style: none;
    li {
      width: 722px;
      height: 184px;
      margin-top: 10px;
      .ip {
        float: left;
        border-color: #ed5564;
        background-color: #ed5564;
        position: relative;
        width: 36px;
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 50%;
        vertical-align: middle;
        margin-top: 60px;
        margin-left: 20px;
      }
      .jpg {
        width: 120px;
        height: 120px;
        border: 1px solid #eee;
        float: left;
        margin-left: 30px;
        margin-top: 20px;
        line-height: 120px;
        img {
          width: 116px;
          height: 116px;
          margin: 1px;
        }
      }

      p {
        width: 436px;
        height: 80px;
        font-size: 25px;
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        color: #000;
      }
      h2 {
        font-size: 20px;
        color: #ed5564;
        font-weight: 550;
        float: left;
        margin-top: 40px;
        margin-left: 10px;
      }
      .cross {
        font-size: 25px;
        float: right;
        position: absolute;
        right: 10px;
        top: 110px;
      }
      .you {
        width: 180px;
        height: 54px;
        // border: 1px solid #000;
        position: absolute;
        top: 210px;
        left: 350px;
        span {
          // display: block;
          border: 1px solid #ccc;
          width: 54px;
          height: 100%;
          display: inline-block;
          vertical-align: top;
          line-height: 100%;
          margin-left: 2px;

          a {
            margin-left: 18px;
            font-size: 30px;
            margin-top: 10px;
          }
          input {
            margin-left: 20px;
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>
