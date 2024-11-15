<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        hide-timestamp="true"
        class="timeline"
        timestamp="2018/4/12"
        placement="bottom"
        type="danger"
      >
        <el-card shadow="hover">
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        hide-timestamp="true"
        class="timeline"
        timestamp="2018/4/3"
        type="success"
        placement="bottom"
      >
        <el-card body-style="padding: 10px" shadow="hover">
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        hide-timestamp="true"
        class="timeline"
        timestamp="2018/4/2"
        placement="bottom"
        type="warning"
      >
        <dev
          :style="{ width: '50%', height: '50%', background: 'red' }"
          @click="aa"
        >
          <el-card shadow="hover">
            <h4>更新 Github 模板11</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </dev>
      </el-timeline-item>
      <el-timeline-item
        class="timeline"
        hide-timestamp="true"
        placement="bottom"
        timestamp="2018/4/2"
        type="info"
      >
        <dev @click="aa">
          <el-card shadow="hover">
            <h4>更新 Github 模板11</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </dev>
      </el-timeline-item>
      <el-timeline-item
        class="timeline"
        hide-timestamp="true"
        placement="bottom"
        timestamp="2018/4/2"
        type="primary"
      >
        <dev @click="aa">
          <el-card shadow="hover">
            <h4>更新 Github 模板11</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </dev>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          timestamp: '2023-01-01',
          content: '活动一',
          icon: 'el-icon-more'
        },
        {
          timestamp: '2023-01-02',
          content: '活动二',
          icon: 'el-icon-more'
        }
      ]
    }
  },
  methods: {
    aa() {
      console.log('aa')
    }
  }
}
</script>

<style scoped>
.block {
  width: 800px;
  margin: 0 auto;
  height: 500px;
  background: #fff;
  oberflow: scroll;
}

.block::-webkit-scrollbar {
  display: none;
}

.timeline {
  top: 10px;
}
</style>
