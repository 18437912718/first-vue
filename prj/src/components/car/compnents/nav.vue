 <template>
  <div class="nav">
    <span></span>
    <ul>
      <li>
        <a href="#">
          <i class="iconfont icon-shouye"></i>首页
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-sousuo"></i>搜索
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-leimupinleifenleileibie"></i>分类
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-xiaoxi"></i>消息
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-wode"></i>我的商城
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.nav {
  padding-top: 30px;
  box-sizing: border-box;
  font-size: 30px;
  z-index: 10;
}
span {
  display: block;
  float: right;
  width: 0;
  height: 0;
  margin-right: 0.5rem;
  font-size: 0;
  line-height: 0;
  border-width: 0.3rem;
  // border-color: transparent transparent rgba(85, 85, 85, 0.95) transparent;
  // border-style: dashed dashed solid dashed;
  // margin-top: 12px;
}
ul {
  list-style: none;
  display: block;
  clear: both;
  background: rgba(85, 85, 85, 0.95);
  border-radius: 0.2rem;
  width: 226px;
  margin-right: 0.1rem;
  position: absolute;
  right: 0;
  top: 86px;
}
li {
  list-style: none;
  width: 100%;
  height: 88px;
  line-height: 88px;
  border-bottom: 1px solid #969696;
}
li a {
  height: 88px;
  display: block;
  font-size: 30px;
  line-height: 88px;
  color: #fff;
  // padding-left: 40px;
  // box-sizing: border-box;
  margin-left: 30px;
}
i {
  font-size: 30px;
  margin-right: 20px;
}
</style>
