<template>
  <div class="cen-four">
    <div class="three-four">
      <a class="top-a">
        <h3 @click="tiao()">
          <i class="iconfont icon-bangzhuzhongxin"></i>
          <span>帮助</span>
        </h3>
        <h5>
          <i class="iconfont icon-pc-you"></i>
        </h5>
      </a>
    </div>
  </div>
</template> 
<script>
export default {
  methods:{
    tiao(){
      this.$router.push("/help")
    }
  }
}
</script>
<style lang="less" scoped>
.cen-four {
  margin-top: 20px;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  padding-top: 5px;
  padding-bottom: 10px;
}
.three-four {
  width: 100%;
  height: 60px;
}
.top-a {
  display: block;
  width: 700px;
  height: 40px;
  margin: 0 auto;
  margin-top: 10px;
}
h3 {
  width: 220px;
  float: left;
  padding-left: 7px;
  .icon-bangzhuzhongxin {
    font-size: 30px;
    color: skyblue;
  }
  span {
    font-size: 30px;
    margin-left: 17px;
    color: black;
  }
}
h5 {
  width: 45px;
  float: right;
  margin-right: 6px;
  margin-top: 1.5px;
  padding-top: 1px;
  .icon-pc-you {
    font-size: 16px;
  }
}
</style>