<template>
  <div id="shopper">
    <img src="https://www.taokubuy.com/data/upload/mobile/special/s0/s0_06227657812210141.jpg" alt />
    <div v-for="(item,index) in shopper" :key="index">
      <!-- <div> -->
      <img :src="item[0].img" alt />
      <ul>
        <li v-for="(it,ind) in item[1]" :key="ind">
          <img :src="it.img" alt />
          <span>{{it.span}}</span>
          <b>{{it.p}}</b>
        </li>
      </ul>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import { getShopper } from "@/api/home.js";
export default {
  data() {
    return {
      shopper: []
    };
  },
  async created() {
    this.shopper = await getShopper();
  }
};
</script>
<style lang="less" scoped>
#shopper {
  > img {
    margin: 20px 0;
  }

}
ul{
    // 
    li{
        display: inline-block;
        width: 350px;
        margin: 10px;
        span{
          font-size: 26px;  
        }
        b{
            font-size: 36px;
            display: block;
            color: red;
        }
    }
}
</style>