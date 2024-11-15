<template>
  <div id="app">
    <el-container class="el-container">
      <el-header>
        <topbar></topbar>
      </el-header>
      <el-main id="main">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <foot></foot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import topbar from './components/topbar.vue'
import foot from './components/foot.vue'

export default {
  components: { topbar, foot },
  name: 'App'
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
#main {
  height: 100%;
}

#main::-webkit-scrollbar {
  display: none;
}

.el-container {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
body {
  background-image: url('images/2.jpg');
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
