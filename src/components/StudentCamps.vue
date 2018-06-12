<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="camps">
        <div class="col-md-4 col-sm-4 col-xs-4 camp" v-for="(camp, index) in camps" v-bind:key="index">
            <div class="row">
                <div class="col-md-4 col-sm-3">Name</div><div class="col-md-8 col-sm-9 value">{{camp.name}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-3">Date</div><div class="col-md-8 col-sm-9 value">{{camp.date}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/responsive.css'

export default {
  name: 'StudentCamps',
  data() {
    return {
      msg: 'Choose your camps',
      camps: [
        { name: 'camp1', date: 'Now' },
        { name: 'camp2', date: 'yesterday' },
        { name: 'camp1', date: 'Now' },
        { name: 'camp2', date: 'yesterday' },
        { name: 'camp1', date: 'Now' },
        { name: 'camp2', date: 'yesterday' },
        { name: 'camp1', date: 'Now' },
        { name: 'camp2', date: 'yesterday' },
        { name: 'camp1', date: 'Now' },
        { name: 'camp2', date: 'yesterday' },
        { name: 'camp1', date: 'Now' },
        { name: 'camp2', date: 'yesterday' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.camps {
  margin: 0 10px;
}

.camp {
  height: 100px;
  background-color: #47b784;
  border: solid 1px black;
  margin-top: 10px;
}

.camp > div {
  width: 100%;
  margin-top: 5px;
}

.camp .value {
  text-align: left;
}
</style>
