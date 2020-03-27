<template>
  <div id="app">
    <!-- 头部 -->
    <carr></carr>
    <mai></mai>
  </div>
</template>
<script>
import carr from "./compnents/carr.vue"
import mai from "./compnents/mai.vue"
export default {
  name: "app",
  components: {
    carr,
    mai
  }
};
</script>
<style lang="less" scoped>
  #app{
    height: 100%;
  }
</style>
