<template>
  <div class="index-page" v-bind:style='{backgroundImage: "url(" + bgImg  + ")" }'>
    <div class="pages">
      <li  class="item" v-for="item in items" v-bind:key="item.name">
        <router-link :to="{name: item.name}">{{ item.title }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { Routes } from './../router/index'

const bgImgs = [
  'https://drscdn.500px.org/photo/261364609/q%3D80_m%3D2000/v2?webp=true&sig=51b6335a838f98460f4247d194b8f03f367edeb13e82ca296f5c0bbc362c6bdf',
  'https://drscdn.500px.org/photo/132721191/q%3D80_m%3D2000/v2?webp=true&sig=8383c3b7faed6428736ed3fce52acd86cf754f9078f6fd73fd0e61fdd6c36f77',
  'https://drscdn.500px.org/photo/258292485/q%3D80_m%3D2000/v2?webp=true&sig=9bd8a247a13ff87d7102595333049c98aa02e50e6b959da941c74200bd5f4546',
  'https://drscdn.500px.org/photo/259084631/q%3D80_m%3D2000/v2?webp=true&sig=4fbff7e00c3b69dca6923afdc5cd69f2c044e90b4eff842bab99c5f245fe6136'
]

export default {
  name: 'HelloWorld',
  data() {
    return {
      bgImg: bgImgs[Math.floor(Math.random() * bgImgs.length)],
      items: Routes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 50px 0;
}

.pages {
  max-width: 800px;
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.item {
  background-color: #fff;
  color: #333;
  font-size: 16px;
  width: 33.3333%;
  line-height: 100px;
  height: 100px;
  border: 2px solid #ddd;
  margin: 0 0 12px;
  text-align: center;
  box-sizing: border-box;
}
</style>
