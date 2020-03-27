<template>
  <div>
    <div class="header">
      <img src="https://www.taokubuy.com/data/upload/shop/common/home_logo.png" alt />

      <!-- <div class="search"> -->
        <router-link to='/search' tag='div' class="search">
        <!-- 搜索 -->
        <i class="iconfont icon-sousuo"></i>
        <input placeholder="请输入关键字" type="text" />
        </router-link>
      <!-- </div> -->
      <div class="news">
        <!-- 消息 -->
        <i class="iconfont icon-xiaoxi"></i>
        <span>消息</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.header {
  background: tomato;
  display: flex;
  // float: top;
  img {
    height: 71px;
    width: 150px;
  }
  .search {
    height: 70px;
    width: 588px;
    border-radius: 15px;
    display: flex;
    flex: 1;
    // height: 30px;
    align-items: center;
    background: #fff;
    i {
      font-size: 46px;
    }
    input {
      height: 70px;
      width: 375px;
      font-size: 30px;
    }
  }
  .news {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    i {
      font-size: 40px;
      color: #fff;
    }
    span {
      font-size: 20px;
      color: #fff;
      margin-top: -16px;
    }
  }
}
</style>