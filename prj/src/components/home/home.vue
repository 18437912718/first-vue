<template>
  <div id="app">
    <!-- 头部 -->
    <headers></headers>
    <!-- 轮播图 -->
    <rotation></rotation>
    <!-- 分类 -->
    <catelist></catelist>
    <!-- 活动精选 -->
    <selected></selected>
    <!-- 今日秒杀 -->
    <seackill></seackill>
    <!-- 大牌推荐 -->
    <brand></brand>
    <!-- 导购推荐 -->
    <shopper></shopper>
    <copyright></copyright>
  </div>
</template>
<script>
import headers from "./components/header.vue"
import rotation from './components/rotation.vue'
import catelist from './components/catelist.vue'
import selected from './components/selected.vue'
import seackill from './components/seckill.vue'
import brand from './components/brand.vue'
import shopper from './components/shopper.vue'
import copyright from './components/copyright.vue'
export default {
  name: "app",
  components: {
    headers,
    rotation,
    catelist,
    selected,
    seackill,
    brand,
    shopper,
    copyright
  }
};
</script>
<style lang="less" scoped>

#app{
  overflow-y: auto; 
  width: 100%;
  margin-bottom: 96px
}
</style>