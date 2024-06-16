<template>
  <div class="box">
    <el-descriptions
      direction="vertical"
      title="作者："
      :border="false"
      labelClassName="labelClass"
      contentClassName="contentClass"
    >
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item
        label="联系地址"
        contentStyle="{'text-align': 'right'}"
        >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
      >
    </el-descriptions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlPageUrl: '../html/index.html'
    }
  }
}
</script>

<style type="scoped">
.box {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  backdrop-filter: blur(3px); /* 背景模糊 */
}
.el-descriptions__body {
  color: #fff;
  background-color: transparent;
}
.el-descriptions-item__label.is-bordered-label {
  color: #909399;
  background: transparent;
}
.el-descriptions {
  color: #fff;
}
.label-class {
  //border: 1px solid hsla(0, 0%, 100%, 0.08);
  //height: 7%;
  //background-color: transparent;
  //background: transparent;
  //display: inline;
}
/* .login-box {
  position: absolute;
  top: 10%;
  left: 33%;
  width: 36%;
  background-color: #fff;
  text-align: center;
  border-radius: 15px;
  border: 2px #fff solid;
  box-shadow: 2px 0px 5px #abcdef;
  display: inline-block;
  height: auto;
  padding: 10px;
}
.login-box iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} */
</style>
