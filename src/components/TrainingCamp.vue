<template>
  <div>
    <button v-on:click="back">返回</button>
    <div class="camps">
        <div class="col-md-4 col-sm-4 col-xs-4 camp" v-for="item in taskCards" v-bind:key="item.id">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4">姓名：</div><div class="col-md-8 col-sm-8 col-xs-8 value">{{item.name}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4">描述：</div><div class="col-md-8 col-sm-8 col-xs-8 value">{{item.description}}</div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4">得分：</div><div class="col-md-8 col-sm-8 col-xs-8 value">{{item.score}}</div>
            </div>
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
