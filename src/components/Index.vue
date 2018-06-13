<template>
  <div class="index-page">
    <div class="pages">
      <li  class="item" v-for="item in items" v-bind:key="item.name">
        <router-link :to="{name: item.name}">{{ item.title }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { Routes } from './../router/index'

export default {
  name: 'HelloWorld',
  data() {
    return {
      items: Routes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-page {
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
  margin: 0 0 30px;
  text-align: center;
  box-sizing: border-box;
}
</style>
