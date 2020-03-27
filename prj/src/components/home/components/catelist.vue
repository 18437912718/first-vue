<template>
  <div class="catelist">
    <ul>
      <li class="homeli" v-for="(item, index) in cateList" :key="index">
        <img :src="item.img" alt />
        <p>{{item.txt}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCateList } from "@/api/home.js";
export default {
  data() {
    return {
      cateList: []
    };
  },
  async created() {
    // console.log("1111")
    // 进行ajax请求
    this.cateList = await getCateList();
  }
};
</script>
<style lang="less" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  .homeli {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    width: 20%;
    img {
      height: 68px;
      width: 68px;
    }
    p{
        font-size: 30px;
    }
  }
}
</style>