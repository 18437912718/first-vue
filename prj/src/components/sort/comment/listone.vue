<template>
  <div class="one">
    <heade></heade>
    <router-link class="pic" tag="li" to="/sort">
      <img class="hui" src="../../../assets/箭头.png" alt />
    </router-link>
    <div class="two">
      <ul>
        <li v-for="(item,index) in sortdata" :key="index">
          <img :src="item.img" />
          <p>{{item.name}}</p>
          <i>{{item.price}}</i>
          <span>
            {{item.sales}}
            <b>{{item.number}}</b>
          </span>
          <div class="trade">{{item.trade}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import heade from "./header";
import BScroll from "@better-scroll/core";
import { mapState } from "vuex";
export default {
  data() {
    return {
      bs3: null
    };
  },
  computed: {
    ...mapState(["sortdata"])
  },
  mounted() {
    this.bs3 = new BScroll(".two", {
      click: true
    });
  },
  components: {
    heade
  }
};
</script>
<style lang="less" scoped>
.one {
  position: absolute;
  left: 0;
  top: 0px;
  background: white;
  width: 750px;
  height: 1228px;
  .pic {
       position: absolute;
      left: 0;
      top: 0px;
      z-index: 1000;
      background-color: #fff;
    .hui {
     
      width: 34px;
      height: 34px;
      padding: 26px 20px;
    }
  }

  .two {
    margin-top: 106px;
    height: 1200px;
  }
  ul {
    height: 1500px;
    li {
      width: 750px;
      height: 300px;
      position: relative;

      img {
        width: 203.26px;
        height: 203.26px;
        float: left;
        margin-top: 20px;
      }
      p {
        width: 496.56px;
        height: 232.28px;
        float: left;
        margin-top: 30px;
        font-size: 28.6px;
        color: #111111;
      }
      i {
        width: 134px;
        height: 38px;
        position: absolute;
        top: 150px;
        left: 200px;
        color: #ec5364;
        font-size: 35.2px;
      }
      span {
        width: 198.62px;
        height: 44px;
        position: absolute;
        top: 200px;
        left: 210px;
        color: #999999;
      }
      .trade {
        width: 297.94px;
        height: 44px;
        position: absolute;
        right: 20px;
        bottom: -10px;
        color: #999999;
      }
    }
  }
}
</style>
    
