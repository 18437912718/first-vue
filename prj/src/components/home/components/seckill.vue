<template>
  <div class='seck'>
    <img src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227649450396097.jpg" alt />
    <div class="top">
      <i></i>
      <div>
        限时秒杀
        <span>更多</span>
      </div>
    </div>
    <div class="product">
      <ul>
        <li v-for="(item,index) in seckill" :key="index" class="l">
          <img :src="item.img" alt />
          <span>{{item.span}}</span>
          <p>{{item.p}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getSeackill } from "@/api/home.js";
export default {
  data() {
    return {
      seckill: []
    };
  },
  async created() {
    // console.log("1111")
    // 进行ajax请求
    this.seckill = await getSeackill();
  }
};
</script>
<style lang="less" scoped>
.seck{
    >img{
        margin: 20px 0;
    }
}
.top {
  display: flex;
  font-size: 30px;
  i {
    height: 30px;
    width: 8px;
    background: chocolate;
    margin: 10px;
  }
  div {
    width: 799px;
    span {
      float: right;
    }
  }
}
.product {
  padding-top: 10px;
  overflow-x: auto;
  ul {
    width: 1500px;
    display: flex;
    //   height: 370px;
    .l {
      width: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 5px;

      img {
        height: 240px;
        width: 240px;
        // margin: 10px 0
      }
      span {
        margin: 0 auto;
        color: red;
        font-size: 36px;
        font-weight: 800
      }
      p{
          text-decoration:line-through;
          color:#777
      }
    }
  }
}
</style>