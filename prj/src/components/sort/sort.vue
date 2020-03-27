<template>
  <div class="cate">
    <!-- 头部......... -->
    <heade></heade>
    <!-- 内容区........... -->
    <div class="content">
      <!-- 左边滑动。。。 -->
      <div class="wrapper">
        <ul>
          <li
            ref="myli"
            @click="seIectOne(index,item.id)"
            :class="{active: currentIndex==index}"
            v-for="(item,index) in allcates"
            :key="index"
          >{{item.title}}</li>
        </ul>
      </div>
      <!-- 右边模块。。。。。。。 -->
      <div class="content-right">
        <div class="wrapper-right">
         
              <ul class="myul">
                
                <li v-for="(ite,inde) in allbrand" :key="inde">
                  <p><i></i> {{ite.title}} <img src="./images/more.png"></p>
                  <ul>
                    <li  @click="searchData(item.span)" v-for="(item,index) in ite.list" :key="index" class="pic">
                      <img :src="item.img" >
                      <span >{{item.span}}</span>
                    </li>
                    <router-view></router-view>
                  </ul>
                </li>
              </ul>
            
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
import heade from "./comment/header.vue";
import BScroll from "@better-scroll/core";
import { getsort, getbrand ,getlistone} from "../../api/sort.js";

export default {
  data() {
    return {
      allcates: [],
      allbrand: null,
      alltitle: [],
      bs1: null,
      bs2: null,
      currentIndex: 0,
      con:[]
      
    };
  },
  components: {
    heade
  },
  methods: {
    async seIectOne(index, id) {
      this.currentIndex = index;
      this.back(index);

      this.allbrand = await getbrand(id);
      this.$nextTick(() => {
        this.bs2.refresh();
      });
    },
    back(index) {
      var Li = this.$refs.myli[index];

      if (Li.offsetTop <= 630) {
        this.bs1.scrollTo(0, -index * 70, 100);
      } else {
        this.bs1.scrollTo(0, -628, 100);
      }
    },
  async searchData(Val){  
         this.con=await getlistone(Val); 
         this.$store.commit("sort",this.con); 
         this.$router.push('/listone')
         
        
      }
  },
  created() {},
  async mounted() {
    this.allcates = await getsort();
    //  this.alltitle = await gettitle();
    this.allbrand = await getbrand(this.allcates[0].id);
    // window.console.log(this.allbrand);
    this.$nextTick(() => {
      this.bs1 = new BScroll(".wrapper", {
        click: true
      });
      this.bs2 = new BScroll(".wrapper-right", {
        click: true
      });
    });
  }
};
</script>

<style lang="less" scoped>
.active {
  color: #e9232c;
  background: #eff4fa;
}
.cate {
  height: 1334px;
  overflow: hidden;
  position: relative;
  .content {
    height: 1128px;
    display: flex;
    margin-top: 106px;
  }
  .wrapper {
    height: 1128px;

    ul {
      margin-bottom: 100px;
      li {
        width: 140px;
        height: 140px;
        text-align: center;
        line-height: 140px;
        font-size: 30px;
      }
    }
  }
  // 右边样式。。。
  .content-right {
    margin-left: 10px;
    height: 100%;
    width: 100%;
    background: white;
    .wrapper-right {
      height: 100%;
      
    }
  }
  .myul{
  
  li{
   
    margin: 30px 0;
    // position: relative;
    
    p{
      width: 100%;
      height: 65px;
      line-height: 65px;
      font-size: 26.4px;
      color: #111111;
      font-weight: 600;
      
    //   position: absolute;
    //  left: 220px;
    //  top: -35px;
     i{
       display: inline-block;
       width: 17.6px;
       height: 17.6px;
       border-radius: 17.6px;
       background: #AC92ED;
     }
     img{
       width: 26px;
       height: 26px;
       float: right;
       margin:30px 30px 8px 30px;
       
     }
  
   
    }
    ul{
      overflow: hidden;
      li{
        width: 165px;
        height: 165px;
        float: left;
        margin: 10px;
        img{
          width: 88px;
          height: 88px;
          margin: 0px 25px;
        }
        span{
          display: block;
          height: 64px;
          width: 147.38px;
          text-align: center;
          line-height: 64px;
        }
      }
    }
  }
  }


  
}

</style>