<template>
  <div>
    <div class="center">
      <div class="login-wrapper">
        <b id="changeLoginMethod" class="cover-method"></b>
        <div id="loginContentPc" class="pc-content">
          <h3>账户登录</h3>
          <div class="input-line">
            <label for="" class="input-line--label iconfont icon-user" title="邮箱"></label>
            <input v-model="email" class="input-line--input" placeholder="邮箱" type="text">
          </div>
          <div class="input-line">
            <label for="" class="input-line--label iconfont icon-lock" title="密码"></label>
            <input v-model="password" class="input-line--input" placeholder="密码" type="password">
          </div>
          <p class="error-info">{{msg}}</p>
          <p class="other-handle">
            <a href="" class="forget-password">忘记密码</a>
            <router-link class="quick-register" :to="{name: 'register'}">快速注册</router-link>
          </p>
          <div class="input-hanlde-line">
            <button class="button" @click="submit()">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Login } from './../services/user'

export default {
  name: 'login',
  data() {
    return {
      msg: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      const { email, password } = this
      if (!email || !password) {
        this.msg = '请输入正确的邮箱和密码'
        return
      }

      Login({
        email,
        password
      }).then(res => {
        if (!res || !res.data || res.data.status.toLowerCase() !== 'ok') {
          this.msg = res.data.message
          setTimeout(() => {
            this.msg = ''
          }, 3000)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='postcss' scoped>
@font-face {
  font-family: 'iconfont';
  src: url('/static/fonts/iconfont.eot');

  /* IE9*/
  src: url('/static/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/iconfont.woff') format('woff'),
    url('/static/fonts/iconfont.ttf') format('truetype'),
    url('/static/fonts/iconfont.svg#iconfont') format('svg');
  /* iOS 4.1- */
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.icon-lock:before {
  content: '\f0045';
}

.icon-user:before {
  content: '\e605';
}

.icon-qrcode:before {
  content: '\e855';
}

.icon-iconpc:before {
  content: '\e647';
}

.icon-icscan24px:before {
  content: '\e656';
}

.login-wrapper {
  position: relative;
  overflow: hidden;
  max-width: 350px;
  min-height: 300px;
  margin: 0 auto;
  background-color: #fff;
  padding: 25px;
  box-sizing: border-box;
}
h3 {
  font-size: 15px;
  font-weight: 600;
}

.iconfont {
  position: absolute;
  width: 52px;
  height: 52px;
  color: #4bb6ed;
  font-size: 40px;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
}

.input-line {
  position: relative;
  margin: 20px 0 0;
  z-index: 2;

  .iconfont {
    color: #fff;
  }
}

.other-handle {
  position: relative;
  line-height: 18px;
  margin: 8px 0;
}

a {
  color: #666;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    color: #4bb6ed;
    text-decoration: underline;
  }
}

.quick-register {
  position: absolute;
  right: 0;
  top: 0;
}

.input-line--label {
  position: absolute;
  left: 1px;
  top: 1px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  background-color: #eee;
}

.input-line--input {
  border: 1px solid #ddd;
  padding: 11px 8px 11px 50px;
  background-color: #fff;
  width: 100%;
  height: 42px;
  box-sizing: border-box;

  &:focus {
    border-color: #4bb6ed;
    box-shadow: none;
    outline: 0;
  }

  &.warn {
    background-color: #f34;
  }
}

.button {
  display: block;
  width: 100%;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: 16px;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  background-color: #4bb6ed;
  transition: all 350ms ease-in;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: lighten(#4bb6ed, 5%);
  }
}

.error-info {
  color: red;
  font-size: 12px;
  min-height: 20px;
  line-height: 20px;
}
</style>
