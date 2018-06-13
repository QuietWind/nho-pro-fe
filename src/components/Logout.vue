<template>
  <div>
    <div class="center">
      <!-- <div class="logout-info">
        <sapn style="color: white">{{logoutStatus}}</span>
      </div> -->
      <div class="input-hanlde-line">
            <button class="button" @click="backlogin">返回首页</button>
          </div>
    </div>
  </div>
</template>

<script>
import { Logout } from './../services/user'

export default {
  name: 'logout',
  data() {
    return {
      logoutStatus: ''
    }
  },
  mounted() {
    Logout().then(res => {
        if(res && res.data && res.data.status == "OK") {
          alert("成功退出");
          // this.logoutStatus = "成功退出";
        } else {
          alert(res.data.message);
          // this.logoutStatus = res.data.message;
        }
      })
  },
  methods: {
    backlogin: function() {
      this.$router.push('/')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='postcss' scoped>
.logout-info {
  margin-top: 20px;
  text-align: center
}

.button {
  display: block;
  width: 20%;
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
  margin: 30px auto;
}

.input-hanlde-line {
  width: 100%;
}
</style>
