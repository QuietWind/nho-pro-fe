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
    name: 'HelloWorld',
    component: Index
  },
  {
    path: '/camps',
    name: 'StudentCamps',
    component: StudentCamps
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
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
