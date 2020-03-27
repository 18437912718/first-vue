<template>
  <div class="comp">
    <bottom></bottom>
    <div class="wrapper">
      <div class="c">
        <router-link tag="li" to="/home" class="jt">
          <img src="../../../assets/箭头.png" alt />
        </router-link>
        <banner></banner>
        <div class="top">
          <h2>海尔吸尘器家用小型手持式强力大吸力功率静音地毯小米粒除螨机</h2>
          <span>风动地刷+两用地刷，双倍洁净</span>
          <div class="price">
            <h1>￥599.00</h1>
            <span>销量：11件</span>
          </div>
        </div>
        <div class="deliver">
          <div class="del-l">送至</div>
          <div class="del-r">
            <p class="r-top">
              <span class="top1">全国</span>
              <span class="top2">有货</span>
              <img src="./images/地址.png" alt />
            </p>
            <p class="r-bot">免运费</p>
          </div>
        </div>
        <div class="mold">
          <span>已选</span>
          <button>默认</button>
          <i class="iconfont icon-pc-you"></i>
        </div>
        <div class="ass">
          <span class="ass1">商品评价</span>
          <span class="ass2">好评率 100%</span>
          <span class="ass3">(11人评价)</span>
          <i class="iconfont icon-pc-you"></i>
        </div>
        <div class="shop">
          <div class="shop-t">
            <i class="iconfont icon-shangpu s"></i>
            <span>邦辰生活家电旗舰店</span>
            <i class="iconfont icon-pc-you g"></i>
          </div>
          <div class="shop-b">
            <span>
              商品相符
              <em>5</em>
              <i>平</i>
            </span>
            <span>
              服务态度
              <em>5</em>
              <i>平</i>
            </span>
            <span>
              发货速度
              <em>5</em>
              <i>平</i>
            </span>
          </div>
        </div>
        <div class="rec">店铺推荐</div>
        <h3 class="deta">点击查看商品详情</h3>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import banner from "./data-rotation.vue";
import bottom from "./data-bottom.vue";
export default {
  data() {
    return {
      bs1: null
    };
  },
  components: {
    banner,
    bottom
  },
  mounted() {
    this.$nextTick(() => {
      this.bs1 = new BScroll(".wrapper", {
        click: true
      });
    });
  }
};
</script>
<style lang="less" scoped>
.bottom {
  position: fixed;
  bottom: 0px;
  z-index: 1000;
}
.comp {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
}
.wrapper {
  // position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .c {
    padding-bottom: 88px;
    div {
      background: #fff;
    }
  }
  .jt {
    position: absolute;
    z-index: 100;
    height: 40px;
    width: 40px;
  }

  .top {
    padding: 20px;
    > h2 {
      font-size: 36px;
    }
    > span {
      font-size: 30px;
    }
    .price {
      display: flex;
      position: relative;
      h1 {
        font-size: 50px;
        color: red;
      }
      span {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 24px;
      }
    }
  }
}
.deliver {
  display: flex;
  font-size: 26px;
  .del-l {
    width: 70px;
    text-align: center;
  }
  .del-r {
    margin-bottom: 20px;
    .r-top {
      display: flex;
      margin-bottom: 20px;
      .top2 {
        margin: 0 20px;
        color: red;
      }
      img {
        position: absolute;
        right: 10px;
        height: 38px;
        width: 38px;
      }
    }
  }
}
.mold {
  height: 80px;
  padding: 10px;
  padding-top: 20px;
  border-top: 4px solid #f5f5f5;
  button {
    margin: 0 20px;
  }
  i {
    margin-top: 5px;
    position: absolute;
    right: 20px;
  }
}
.ass {
  height: 50px;
  margin: 30px 0;
  padding: 20px;
  font-size: 28px;
  .ass2 {
    margin: 20px;
    color: red;
  }
  .ass3 {
    position: absolute;
    right: 80px;
  }
  i {
    margin-top: 5px;
    position: absolute;
    right: 20px;
  }
}
.shop {
  font-size: 34px;
  .shop-t {
    padding: 30px 10px 0 10px;
    height: 80px;
    border-bottom: 4px solid #f5f5f5;
    color: #000;
    .s {
      font-size: 30px;
    }
    .g {
      position: absolute;
      right: 10px;
    }
  }
  .shop-b {
    padding: 30px 10px 0 10px;
    height: 80px;
    font-size: 25px;
    display: flex;
    span {
      flex: 1;
      em {
        color: red;
        margin: 20px;
        font-size: 30px;
      }
      i {
        height: 31px;
        width: 31px;
        display: inline-block;
        background: red;
        color: #fff;
        border-radius: 20%;
        text-align: center;
        line-height: 31px;
      }
    }
  }
}
.rec {
  padding: 0 10px;
  margin: 30px 0;
  height: 75px;
  line-height: 75px;
  font-size: 25px;
}
.deta {
  text-align: center;
  height: 54px;
  background-color: #f5f5f5;
}
</style>
