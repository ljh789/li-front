<template>
  <div class="box">
    <iframe :src="htmlPageUrl" class="box"></iframe>
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
<style>
.box {
  width: 100%;
  height: 100%;
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
