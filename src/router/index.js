import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutComp from '../components/AboutComp.vue'
import ProjectComp from '../components/ProjectComp.vue'
import EmailComp from '../components/EmailComp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectComp
  },
  {
    path: '/contact',
    name: 'contact',
    component: EmailComp
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComp
  }
]

const router = new VueRouter({
  routes
})

export default router
