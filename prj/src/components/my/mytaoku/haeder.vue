<template>
  <div class="header">
    <div class="top">
      <a   class="a1-l">
        <i class="iconfont icon-shezhi"></i>
      </a>
    </div>
    <div class="cen">
      <a   class="center-s"></a>
      <a   class="center">
        <router-view></router-view>
      <router-link tag="li" to=/log class="log_in">点击登录</router-link>
      </a>
    </div>
    <div class="bottom">
      <span>
        <a class="a-one">
          <i class="iconfont icon-xin" @click="show()"></i>
          <p class="pin" @click="show()">商品收藏</p>
        </a>
      </span>
      <span>
        <a>
          <i class="iconfont icon-shangpu" @click="show2()"></i>
          <p class="dian" @click="show2()">店铺收藏</p>
        </a>
      </span>
      <span>
        <a>
          <i class="iconfont icon-zuji" @click="show4()"></i>
          <p class="zhu" @click="show4()">我的足迹</p>
        </a>
      </span>
    </div>
    <div class="s-one">
       <p>你还未添加商品!</p>
       <button @click="show1()">确定</button>
    </div>
     <div class="d-one">
       <p>你还未添加店铺!</p>
       <button @click="show3()">确定</button>
    </div>
     <div class="z-one">
       <p>暂无足迹</p>
       <button @click="show5()">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
     show(){
      let a= document.querySelector('.s-one');
      a.style.display='block';
    },
    show1(){
      let a= document.querySelector('.s-one');
      a.style.display='none';
    },

    show2(){
      let a= document.querySelector('.d-one');
      a.style.display='block';
    },
    show3(){
      let a= document.querySelector('.d-one');
      a.style.display='none';
    },
 
      show4(){
      let a= document.querySelector('.z-one');
      a.style.display='block';
    },
    show5(){
      let a= document.querySelector('.z-one');
      a.style.display='none';
    }

  }
   
}
</script>


<style lang="less" scoped>
.header {
  width: 100%;
  height: 500px;
  animation: changeBg 20s infinite;
  background-color: #ed5564;
  background-image: url("../../../assets/mybeijing.png");
}
@keyframes changeBg {
  0% {
    background-color: #ed5564;
  }

  10% {
    background-color: #fb6e52;
  }
  20% {
    background-color: #ffce55;
  }
  30% {
    background-color: #a0d468;
  }
  40% {
    background-color: #48cfae;
  }
  50% {
    background-color: #4fc0e8;
  }
  60% {
    background-color: #5d9cec;
  }
  70% {
    background-color: #ac92ed;
  }
  80% {
    background-color: #ec87bf;
  }
  90% {
    background-color: #ed5564;
  }
}

.top {
  width: 100%;
  height: 86px;
}
.a1-l {
  display: block;
  width: 86px;
  height: 86px;
  float: left;
  position: relative;
}
.icon-shezhi {
  font-size: 46px;
  position: absolute;
  left: 15px;
  top: 13px;
  color: white;
}

.cen {
  width: 552px;
  height: 276px;
  margin: 0 auto;
}
.center-s {
  display: block;
  width: 184px;
  height: 184px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("../../../assets/mytouxiang.png");
  background-position: 50% 50%;
  background-size: 100%;
  border-radius: 100%;
}
.center {
  display: block;
  width: 147px;
  height: 42px;
  margin: 0 auto;
  margin-top: 8px;
}
.log_in {
  font-size: 32px;
  color: white;
  margin-left: 6px;
}
.bottom {
  width: 100%;
  height: 140px;
  background: rgba(0, 0, 0, 0.1);
  span {
    display: inline-block;
    width: 33.33%;
    height: 140px;
    a {
      display: block;

      i {
        font-size: 65px;
        color: white;
        margin-left: 36%;
        margin-top: 10px;
      }
      p {
        font-size: 25px;
        color: #fff;
        text-align: center;
        margin-bottom: 40px;
      }
    }
  }
}
.a-one{
  position: relative;
}
.s-one{
  position: absolute;
  left: 25%;
  top: 40%;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.6);
  display: none;

 p{
    font-size: 40px;
    text-align: center;  
    color: red;
    margin-top: 80px
 }
 button{
   font-size: 60px;
   margin-left: 94px;
   margin-top: 80px;
   width: 200px;
   height: 100px;
 } 
}

.d-one{
  position: absolute;
  left: 25%;
  top: 40%;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.6);
  display: none;

 p{
    font-size: 40px;
    text-align: center;  
    color: red;
    margin-top: 80px
 }
 button{
   font-size: 60px;
   margin-left: 94px;
   margin-top: 80px;
   width: 200px;
   height: 100px;
 } 
}


.z-one{
  position: absolute;
  left: 25%;
  top: 40%;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.6);
  display: none;

 p{
    font-size: 40px;
    text-align: center;  
    color: red;
    margin-top: 80px
 }
 button{
   font-size: 60px;
   margin-left: 94px;
   margin-top: 80px;
   width: 200px;
   height: 100px;
 } 
}
</style>