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
import campsRequester from '@/services/camps.js'
export default {
  name: 'StudentCamps',
  data() {
    return {
      msg: 'Choose your camps',
      camps: [
        {
          id: '5',
          name: '中药爱好者',
          summary: '爱好采药、行医的同学欢迎参与',
          startDate: '2018-11-02',
          inNum: 8
        },
        {
          id: '4',
          name: '农业爱好者',
          summary: '爱好插秧、种田的同学欢迎参与',
          startDate: '2018-08-12',
          inNum: 2
        },
        {
          id: '3',
          name: '天文爱好者',
          summary: '爱好观象的同学欢迎参与',
          startDate: '2018-06-22',
          inNum: 22
        },
        {
          id: '2',
          name: '音乐爱好者',
          summary: '爱好流行、民谣等曲风的同学欢迎参与',
          startDate: '2018-06-31',
          inNum: 31
        },
        {
          id: '1',
          name: '体育爱好者',
          summary: '爱好篮球、乒乓球等运动的同学欢迎参与',
          startDate: '2018-06-12',
          inNum: 12
        }
      ]
    }
  },
  methods: {
    onCampClick(id) {
        this.$router.push({ name: 'HelloWorld', params: { id: id }})
    }
  },
  beforeMount() {
    // campsRequester.GetCamps().then(res => {
    //   this.camps = res.data.clams
    // })
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
.camp:active{
    background-color: #36495d;
}
</style>
