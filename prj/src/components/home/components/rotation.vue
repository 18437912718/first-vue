<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt="">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getBanner} from "../../../api/home.js"
  export default {
    name: 'carrousel',
    async created() {
            this.swiperSlides = await getBanner()
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