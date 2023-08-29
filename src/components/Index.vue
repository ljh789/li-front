<template>
  <div class="home">
    <!--导航条-->
    <Topbar class="navbar"></Topbar>
    <div class="homepage"><router-view></router-view></div>
    <foot class="foot"></foot>
  </div>
</template>
<script>
import Foot from '@/components/foot.vue'
import Topbar from '@/components/topbar.vue'
import FindWork from '@/components/FindWork'
export default {
  components: {
    Foot,
    Topbar,
    FindWork
  }
}
const navbar = document.querySelector('.navbar')
const scrollThreshold = 200 // 滚动超过 200px 后变为悬浮框

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('floating') // 添加悬浮框样式
  } else {
    navbar.classList.remove('floating') // 移除悬浮框样式
  }
})
</script>
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  transition: background-color 0.3s ease, padding 0.3s ease;
}

.content {
  height: 1500px; /* 为了模拟页面内容滚动 */
  padding-top: 50px;
}
.home {
  width: 100%;
  height: 100%;
}
.homepage {
  width: 100%;
  top: 7%;
  height: 88%;
  position: relative;
}
body {
  background-image: url('../images/2.jpg');
  background-size: cover; /* 或者尝试 background-size: 100% 100%; */
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw; /* 使元素宽度铺满整个视口 */
  height: 100vh; /* 使元素高度铺满整个视口 */
  margin: 0; /* 清除默认的外边距 */
  padding: 0; /* 清除默认的内边距 */
  border: none; /* 清除默认的边框 */
  overflow: hidden; /* 隐藏溢出内容*/
  background-attachment: fixed; /* 固定背景图片 */
}
</style>
