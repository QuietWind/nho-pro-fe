<template>
    <div class="camps">
      <button v-on:click="back">返回</button>
      <h2>任务卡</h2>
        <div  v-for="item in taskCards" :key="item.id" class="col-md-4 col-sm-4 col-xs-4 camp">
            <div class="row">
                <div class="col-md-4 col-sm-3">姓名：</div><div class="col-md-8 col-sm-9 value">{{item.name}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-3">描述：</div><div class="col-md-8 col-sm-9 value">{{item.description}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-3">得分：</div><div class="col-md-8 col-sm-9 value">{{item.score}}</div>
            </div>
        </div>

  </div>
</template>

<script>
import { GetCampDetail } from '@/services/camps.js'

export default {
  name: 'TrainingCamp',
  data() {
    return {
      taskCards: []
    }
  },
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.go(-1)
      }
    }
  },
  mounted() {
    this.taskCards = [
      {
        id: 'kasdjfaldjfksdjfkladk',
        name: 'john',
        description: '这是描述，不知道',
        status: 1,
        score: 100
      },
      {
        id: 'sdfoizjscovzklnwefn',
        name: 'tom',
        description: '这是描述，不知道',
        status: 2,
        score: 99
      },
      {
        id: 'izjsklvuwioe',
        name: 'saller',
        description: '这是描述，不知道',
        status: 1,
        score: 72
      },
      {
        id: 'izjsklvuwioe2',
        name: 'saller',
        description: '这是描述，不知道',
        status: 1,
        score: 72
      },
      {
        id: 'izjsklvuwioe3',
        name: 'saller',
        description: '这是描述，不知道',
        status: 1,
        score: 72
      },
      {
        id: 'izjsklvuwioe4',
        name: 'saller',
        description: '这是描述，不知道',
        status: 1,
        score: 72
      },
      {
        id: 'izjsklvuwioe5',
        name: 'saller',
        description: '这是描述，不知道',
        status: 1,
        score: 72
      },
      {
        id: 'izjsklvuwioe6',
        name: 'saller',
        description: '这是描述，不知道',
        status: 1,
        score: 72
      }
    ]

    var parentParams = this.$router.currentRoute.params

    GetCampDetail(parentParams.id).then(res => {
      this.taskCards = res.data.data.taskCards
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
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
