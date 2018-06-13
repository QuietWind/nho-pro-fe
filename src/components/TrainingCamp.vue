<template>
  <div>
    <button v-on:click="back">返回</button>
    <div class="camps">
        <div class="col-md-12 col-sm-12 col-xs-12 camp">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3">训练营名称：</div><div class="col-md-9 col-sm-9 col-xs-9 value">{{camp.name}}</div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3">开始时间：</div><div class="col-md-9 col-sm-9 col-xs-9 value">{{camp.startDate}}</div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3">简介：</div><div class="col-md-9 col-sm-9 col-xs-9 value">{{camp.summary}}</div>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3">描述：</div><div class="col-md-9 col-sm-9 col-xs-9 value">{{camp.desc}}</div>
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
      camp: {}
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
    var parentParams = this.$router.currentRoute.params
    GetCampDetail(parentParams.id).then(res => {
      if (res.data.status === 'FAIL') {
        this.$router.push({ name: 'login' })
      } else {
        this.camp = res.data.data
      }
    })
  }
}
</script>
