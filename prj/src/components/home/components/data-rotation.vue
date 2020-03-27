<template>
  <swiper :options="swiperOption" class="com">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt="" class="imag">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import {getDataBanner} from "@/api/home.js"
  export default {
    name: 'carrousel',
    async created() {
            this.swiperSlides = await getDataBanner()
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true
        },
        swiperSlides: []
      }
    },
    mounted() {
   
    }
  }
</script>
<style lang="less" scoped>
.com{
   height: 750px;
   width: 100%;
   .imag{
   height: 100%;
   width: 100%;
}
}

</style>