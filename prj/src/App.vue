<template>
  <div id="app">
    <div class="col"> 

    </div>
     <navlist></navlist>
    
     <router-view></router-view>
  </div>
</template>

<script>
import navlist from './components/nav.vue'
export default {
  name: 'app',
  components: {
    navlist
  }
}
</script>


<style lang="less" scoped>

</style>>



