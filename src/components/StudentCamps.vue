<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="camps">
        <div class="col-md-4 col-sm-4 col-xs-4 camp" v-for="(camp, index) in camps" v-bind:key="index" v-on:click="onCampClick(camp.id)">
            <div class="row">
                <div class="col-md-4 col-sm-3 col-xs-3">Name</div><div class="col-md-8 col-sm-9 col-xs-9 value">{{camp.name}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-3 col-xs-3">Summary</div><div class="col-md-8 col-sm-9 col-xs-9 value">{{camp.summary}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-3 col-xs-3">Start Date</div><div class="col-md-8 col-sm-9 col-xs-9 value">{{camp.startDate}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-3 col-xs-3">Number</div><div class="col-md-8 col-sm-9 col-xs-9 value">{{camp.inNum}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/responsive.css'
import { GetCamps } from '@/services/camps.js'
export default {
  name: 'StudentCamps',
  data() {
    return {
      msg: 'Choose your camps',
      camps: []
    }
  },
  methods: {
    onCampClick(id) {
      this.$router.push({ name: 'TrainingCamp', params: { id: id } })
    }
  },
  beforeMount() {
    GetCamps().then(res => {
      this.camps = res.data.data.clams
    })
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
  background-color: #47b784;
  border: solid 1px black;
  margin-top: 10px;
  min-height: 162px;
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
</style>
