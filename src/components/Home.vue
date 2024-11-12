<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        hide-timestamp="true"
        placement="top"
        timestamp="2018/4/12"
      >
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        hide-timestamp="true"
        placement="top"
        timestamp="2018/4/3"
        type="success"
      >
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        hide-timestamp="true"
        placement="top"
        timestamp="2018/4/2"
      >
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.block {
  width: 800px;
  margin: 0 auto;
  height: 500px;
  background: #fff;
}
</style>
