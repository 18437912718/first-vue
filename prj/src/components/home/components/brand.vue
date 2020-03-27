<template>
  <div id="brand">
    <img src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227655549051850.jpg" alt />
    <div class="top">
      <i></i>
      <p>进口红酒</p>
    </div>
    <ul>
      <li v-for="(item,index) in brand" :key="index">
        <img :src="item.img" alt />
        <span>{{item.span}}</span>
        <b>{{item.p}}</b>
      </li>
    </ul>
  </div>
</template>
<script>
import { getBrand } from "@/api/home.js";
export default {
  data() {
    return {
      brand: []
    };
  },
  async created() {
    // console.log("1111")
    // 进行ajax请求
    this.brand = await getBrand();
  }
};
</script>
<style lang="less" scoped>
#brand {
  >img {
    margin: 20px;
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
}
ul{ 
    width: 100%;
    li{
        width: 100%/2;
        display: inline-block;
        // margin: 10px;
        font-size: 30px;
        img{
            height: 380px;
            width: 100%;
        }
        b{  font-size: 36px;
            display: block;
            color: red;
        }
    }
}
</style>