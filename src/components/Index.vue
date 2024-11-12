<template>
  <dev></dev>
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
</script>
<style scoped>
// 样式设置；毛玻璃感觉背景，左右边距5%
.container {
  background-color: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  backdrop-filter: blur(3px); /* 背景模糊 */
}

/* 设置左右边距为5% */
.container {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
