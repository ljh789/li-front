<template>
  <dev>
    <el-button type="text" @click="dialogVisible = true">登录</el-button>
    <!--    <el-button type="text" @click="dialogVisible = true">注册</el-button>-->
    <el-dialog
      title="登录"
      :visible="dialogVisible"
      width="30%"
      :before-close="handleClose"
      append-to-body
      center="true"
    >
      <el-form
        :model="loginForm"
        ref="loginForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号"
            ref="username"
            name="username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </dev>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, // 控制对话框是否显示
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: { required: true, message: '请输入账号', trigger: 'blur' },
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '密码长度在6到20个字符之间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleLogin: function() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 这里通常会替换为实际的API调用
          this.$myAxios
            .post('/user/login', this.loginForm)
            .then((response) => {
              console.log('Login内接口请求返回')
              console.log(response)
              if (
                response.code === 200 &&
                response.data.message === '登陆成功'
              ) {
                this.$notify({
                  title: '登录成功',
                  message: '期待陪您度过美好的一天！',
                  type: 'success',
                  showClose: false,
                  duration: 1000
                })
              } else {
                this.$notify({
                  title: '登录失败',
                  message: '登录失败,请检查账号和密码！',
                  type: 'error',
                  showClose: false,
                  duration: 1000
                })
              }

              // this.onLoginSubmit()
              // 处理登录成功逻辑
            })
            .catch((e) => {
              console.log('登录失败')
              console.log(e)
              // 处理错误
            })
        } else {
          console.error('表单验证失败')
        }
      })
    },
    handleClose() {
      this.dialogVisible = false
    },
    onLoginSubmit() {
      this.dialogVisible = true
      this.$emit('loginSuccess', this.loginForm.username)
    }
  }
}
</script>
