<template>
  <div class="topbar">
    <ul>
      <div class="topside">
        <li id="loginInfo">
          <router-link class="custom-router-link" to="/">首页</router-link>
        </li>
        <!--        <li>
                  <router-link class="custom-router-link" to="/">高考</router-link>
                </li>
                <li>
                  <router-link class="custom-router-link" to="/">工作</router-link>
                </li>
                <li>
                  <router-link class="custom-router-link" to="/">考公</router-link>
                </li>
                <li>
                  <router-link class="custom-router-link" to="/">提升</router-link>
                </li>-->
        <li>
          <router-link class="custom-router-link" to="/forMe"
            >关于我
          </router-link>
        </li>
      </div>
      <div class="topTool">
        <Login
          v-if="username === ''"
          @loginSuccess="handleLoginSuccess"
        ></Login>
        <dev v-else> {{ username }}</dev>
      </div>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Login from './Login.vue'

export default {
  components: { Login },
  data() {
    return {
      username: ''
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  watch: {
    userInfo: {
      handler(newUserInfo) {
        this.username = newUserInfo.username
      },
      immediate: true
    }
  },
  methods: {
    redirectToUrl() {
      window.location.href = 'http://www.ljh789.xyz'
    },
    handleLoginSuccess(username) {
      console.log('username = ' + username)
      this.username = username
    }
  }
}
</script>
>
<style scoped>
.custom-router-link {
  text-decoration: none;
  color: #fff;
}
.topTool ul li {
  margin-left: 60px;
  position: relative;
  line-height: 24px;
  color: #fff;
  float: left;
  margin-left: 60px;
  position: relative;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.topbar {
  position: absolute;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  height: 7%;
  background-color: transparent;
  display: inline;
}

.topside {
  position: absolute;
  top: 30%;
  left: 5%;
}

.topTool {
  position: absolute;
  top: 30%;
  right: 5%;
  display: flex;
  align-items: center;
  height: 24px;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
}

#loginInfo {
  opacity: 1;
}

.topside li {
  float: left;
  margin-left: 60px;
  position: relative;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.topside ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

/*.topside a {
  text-decoration: none;
  color: #fff;
}*/
</style>
