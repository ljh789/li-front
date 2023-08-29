<template>
  <div id="login-box">
    <div id="login-title">
      <div class="line_block">密码登录</div>
      <div id="login-limit" class="line_block"></div>
      <div class="line_block">短信登录</div>
    </div>
    <form class="tab__form">
      <div class="form__item">
        <div class="from_info">账号</div>
        <input type="text" id="username" value="" placeholder="用户名/手机号" />
      </div>
      <div class="form__item">
        <div class="from_info">密码</div>
        <input type="password" id="password" placeholder="密码" />
      </div>
      <input
        class="register"
        type="password"
        id="password1"
        placeholder="再次输入"
        v-show="username"
      />
      <br />
      <div class="buttons">
        <button type="button" :disabled="isButtonDisabled" @click="login()">
          登录
        </button>
        <button
          class="register"
          :v-show="username"
          type="button"
          @click="getuser"
        >
          注册
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import liServise from '@/api/index.js'
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    username: {},
    password: {}
  },
  data() {
    return {
      isButtonDisabled: false
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  methods: {
    ...mapMutations(['updateState']),
    handleClick() {
      // 点击按钮后禁用按钮
      this.isButtonDisabled = true

      // 一秒后解除禁用按钮
      setTimeout(() => {
        this.isButtonDisabled = false
      }, 1000)
    },
    login() {
      this.handleClick()
      var username = document.getElementById('username').value
      var password = document.getElementById('password').value
      liServise
        .post('/user/login', {
          username: username,
          password: password
        })
        .then((response) => {
          let data = response.data.data
          localStorage.setItem('token', data.token)
          this.$store.commit('login/updateState', { userInfo: data })
          this.$router.push('/')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    testing(username, password, password1) {
      var tmp = username && password
      // eslint-disable-next-line eqeqeq
      if (tmp === '') {
        alert('请填写完整信息')
        return 0
      }
      if (username.length < 6 || username.length > 16) {
        alert('用户名长度为：6-16位')
        return 0
      }
      if (password < 6 || password1 < 6) {
        alert('密码长度错误')
      } else if (password === password1) {
        alert('username:' + username + '\n' + 'password:' + password)
      } else {
        alert('两次输入的密码不一样')
      }
    },
    getuser() {
      // 打开方式有问题，关掉从新来
      var username = document.getElementById('username').value
      var password = document.getElementById('password').value
      var password1 = document.getElementById('password1').value
      this.testing(username, password, password1)
    }
  }
}
</script>
<style type="text/css">
* {
  margin: 0px;
}

.buttons {
  position: absolute;
  width: 20%;
  height: 10%;
}

body::-webkit-scrollbar {
  display: none;
}

input {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
  -webkit-box-shadow: 0 0 0 1000px #fff inset;
  box-shadow: inset 0 0 0 900px #fff;
  margin-left: 20px;
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: field;
}

/**
  #content {
    position: absolute;
    height: 100%;
    min-width: auto;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10010;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
   */
#login-box {
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

.title {
  line-height: 58px;
  margin-top: 20px;
  font-size: 36px;
  color: #000;
  height: 58px;
}

#box:hover {
  border: 2px #fff solid;
}

.input {
  margin-top: 20px;
}

input {
  outline-style: none;
  border: 0px solid #ccc;
  border-radius: 3px;
  padding: 0px 0px;
  width: 70%;
  height: auto;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Microsoft soft';
}

button {
  margin-top: 1%;
  border: none;
  color: #000;
  width: 38%;
  padding: 3%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 82%;
  border-radius: 5%;
  background-color: #cccccc;
}

button:hover {
  background-color: #b721ff;
  color: #fff;
}

.line_block {
  display: inline-block;
}

.tab__form {
  width: 100%;
  height: 90px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
}

.tab__form .form__item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: 12px 20px;
  border: 1px solid #dedede;
}
</style>
