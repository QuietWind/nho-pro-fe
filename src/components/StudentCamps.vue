<template>
    <div class="camps">
        <div class="col-md-4 col-sm-4 col-xs-4 camp" v-for="(camp, index) in camps" v-bind:key="index" v-on:click="onCampClick(camp.id)">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4">Name</div><div class="col-md-8 col-sm-8 col-xs-8 value">{{camp.name}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4">Summary</div><div class="col-md-8 col-sm-8 col-xs-8 value">{{camp.summary}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4">Start Date</div><div class="col-md-8 col-sm-8 col-xs-8 value">{{camp.startDate}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4">Number</div><div class="col-md-8 col-sm-8 col-xs-8 value">{{camp.inNum}}</div>
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
      camps: []
    }
  },
  methods: {
    onCampClick(id) {
      this.$router.push({ name: 'TrainingCamp', params: { id: id } })
    }
  },
  mounted() {
    GetCamps().then(res => {
      this.camps = res.data.data.clams
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
