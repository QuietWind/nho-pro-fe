<template>
  <div id="app" v-bind:style='{backgroundImage: "url(" + bgImg  + ")" }'>
    <p class="info-line">
      <router-link class="back-home" :to="{name: 'index'}">首页</router-link>
      <span v-if="info">{{info.email}}</span>
    </p>
    <router-view/>
  </div>
</template>

<script>
const bgImgs = [
  'https://drscdn.500px.org/photo/261364609/q%3D80_m%3D2000/v2?webp=true&sig=51b6335a838f98460f4247d194b8f03f367edeb13e82ca296f5c0bbc362c6bdf',
  'https://drscdn.500px.org/photo/132721191/q%3D80_m%3D2000/v2?webp=true&sig=8383c3b7faed6428736ed3fce52acd86cf754f9078f6fd73fd0e61fdd6c36f77',
  'https://drscdn.500px.org/photo/258292485/q%3D80_m%3D2000/v2?webp=true&sig=9bd8a247a13ff87d7102595333049c98aa02e50e6b959da941c74200bd5f4546',
  'https://drscdn.500px.org/photo/259084631/q%3D80_m%3D2000/v2?webp=true&sig=4fbff7e00c3b69dca6923afdc5cd69f2c044e90b4eff842bab99c5f245fe6136'
]

export default {
  name: 'App',
  data() {
    return {
      info: undefined,
      bgImg: bgImgs[Math.floor(Math.random() * bgImgs.length)]
    }
  },
  created() {
    const userInfo = sessionStorage.getItem('user_info')
    if (userInfo) {
      this.info = JSON.parse(userInfo)
    }
  }
}
</script>
<style>
#app {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  padding: 100px 0;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow-y: auto;
}

.camps {
  margin: 0 10px;
  overflow: hidden;
}

.camp {
  background-color: #fff;
  border: solid 1px black;
  color: #333;
  font-size: 16px;
  line-height: 25px;
  border: 2px solid #ddd;
  margin: 0 0 12px;
  min-width: 250px;
  min-height: 200px;
}

.camp > div {
  width: 100%;
  margin-top: 5px;
}

.camp .value {
  text-align: left;
}

.camp:hover {
  cursor: pointer;
}
.camp:active {
  background-color: #36495d;
}

.back-home {
  display: inline-block;
  font-size: 16px;
  color: #4f9fff;
  padding: 12px;
  margin: 0 20px;
  background-color: #fff;
}

.info-line {
  color: #4f9fff;
}
</style>
