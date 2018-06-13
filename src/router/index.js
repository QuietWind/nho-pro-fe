import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import StudentCamps from '@/components/StudentCamps'
import TrainingCamp from '@/components/TrainingCamp'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

Vue.use(Router)

export const Routes = [
  {
    path: '/',
    name: 'index',
    title: '首页',
    component: Index
  },
  {
    path: '/camps',
    name: 'StudentCamps',
    title: '首页',
    component: StudentCamps
  },
  {
    path: '/register',
    name: 'register',
    title: '我要注册',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    title: '我要登录',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    title: '登出账户',
    component: Logout
  },
  {
    path: '/trainingCamp',
    name: 'TrainingCamp',
    title: '训练营',
    component: TrainingCamp
  }
]

export default new Router({
  routes: Routes
})
