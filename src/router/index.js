import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingpage',
    component: LandingPageView
  },
  {
    path: '/regulations',
    name: 'regulations',

    component: () => import('../views/RegulationsPage.vue')
  },
  {
    path: '/types',
    name: 'types of smoke alarms',
    component: ()=> import('../views/TypesPage.vue')
  },
   {
    path: '/place',
    name: 'place',
    component: ()=> import('../views/AlarmPlacePage.vue')
  },
   {
    path: '/practices',
    name: 'practices',
    component: ()=> import('../views/DownloadsPage.vue')
  },
  {
    path: '/facts',
    name: 'facts',
    component: ()=> import('../views/FactsPage.vue')
  },
  {
    path: '/maintain',
    name: 'maintain',
    component: ()=> import('../views/MaintainPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
